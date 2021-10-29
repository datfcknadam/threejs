<template>
  <div class="world">
  </div>
</template>
<script>
import * as THREE from 'three';

export default {
  name: "World",
  props: {
    msg: String,
  },
	data: () => ({
		scene: null,
		camera: null,
		renderer: null,
	}),
  mounted() {
    this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.$el.appendChild(this.renderer.domElement);
  },
};
</script>

<style scoped>
</style>
