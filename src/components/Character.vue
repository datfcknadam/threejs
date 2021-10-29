<template>
  <div class="character" :style="position">
  </div>
</template>

<script>
export default {
	name: 'character',
	computed: {
		position() {
			const { x, y } = this.$store.getters['getPosition'];
			return {
				top: `${y}px`,
				left: `${x}px`,
			};
		},
	},
	methods: {

	},
}
</script>

<style lang="sass">
	.character
		position: absolute
</style>