<template>
	<div class="drag-drop">
		<ul class="drop-list">
			<li v-for="listItem in orderedList" :key="listItem.id">
				Pos: {{ listItem.pos }} Id:{{ listItem.id }}
			</li>
		</ul>
		<button @click="newPos(theList, 3, 0)">from 4th to 1st</button>
		<button @click="newPos(theList, 0, 3)">from 1st to 4th</button>
		<button @click="newPos(theList, 1, 2)">from 2nd to 3rd</button>
		<button @click="newPos(theList, 2, 1)">from 3rd to 2nd</button>
	</div>
</template>
<script>
export default {
	props: ['theList'],
	computed: {
		orderedList() {
			return [...this.theList].sort((a, b) => (a.pos > b.pos ? 1 : -1))
		},
	},
	methods: {
		newPos(list, from, to) {
			if (from == to) return

			let fromItem = list.find((item) => item.pos == from)

			if (from > to) {
				list
					.filter((item) => {
						return item.pos < from && item.pos >= to
					})
					.forEach((item) => {
						item.pos++
					})
			} else {
				list
					.filter((item) => {
						return item.pos > from && item.pos <= to
					})
					.forEach((item) => {
						item.pos--
					})
			}
			fromItem.pos = to
		},
	},
}
</script>
