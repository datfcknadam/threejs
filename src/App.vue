<template>
  <div id="canvas" />
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
export default {
  name: "App",
  data: () => ({
    scene: null,
    camera: null,
    renderer: null,
		hero: null,
  }),
  methods: {
    render() {
      const that = this;
      function render(time) {
				time *= 0.001; 
				if (that.hero) {
					that.hero.rotation.y = time;
				}
				
				
        that.renderer.render(that.scene, that.camera);
				requestAnimationFrame(render);
      }
      render();
    },
  },
  mounted() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    this.renderer = new THREE.WebGLRenderer();
    this.scene.background = new THREE.Color("green");
    this.renderer.setSize(window.innerWidth, window.innerHeight);
		const light = new THREE.SpotLight( 0xffffff  );
    light.position.set(100, 100, 100);
    this.scene.add(light);
    const loader = new GLTFLoader();
    loader.load(
      "/models/hero/scene.gltf",
      (gltf) => {
				gltf.scene.scale.multiplyScalar(1 / 100); // adjust scalar factor to match your scene scale
        gltf.scene.position.x = 0; // once rescaled, position the model where needed
        gltf.scene.position.z = -20;
				this.hero = gltf.scene;
        this.scene.add(gltf.scene);
      },
      (progress) => {
        console.log(progress);
      },
      (error) => {
        console.log(error);
      }
    );
    this.$el.appendChild(this.renderer.domElement);
    this.render();
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
