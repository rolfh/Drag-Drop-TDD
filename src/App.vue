<template>
	<div id="app">
		<dragDrop :theList="listData" />
	</div>
</template>

<script>
import dragDrop from './components/drag-drop.vue'

export default {
	name: 'App',
	data: () => ({
		listData: [
			{
				id: 0,
				pos: 0,
			},
			{
				id: 1,
				pos: 1,
			},
			{
				id: 2,
				pos: 2,
			},
			{
				id: 3,
				pos: 3,
			},
		],
	}),
	components: {
		dragDrop,
	},
}
</script>

<style lang="less">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
