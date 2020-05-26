import { shallowMount } from '@vue/test-utils'
import dragDrop from '../drag-drop.vue'

describe('drag-drop.vue', () => {
	let theList = []

	beforeEach(() => {
		theList = [
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
		]
	})

	it('.droplist has 4 list-items', () => {
		const wrapper = shallowMount(dragDrop, {
			propsData: {
				theList,
			},
		})
		const listItems = wrapper.findAll('.drop-list li')
		expect(listItems.length).toEqual(4)
	})

	it('can re-arrange item from bottom to top', async () => {
		const wrapper = shallowMount(dragDrop, {
			propsData: {
				theList,
			},
		})
		await wrapper.vm.newPos(theList, 3, 0)
		expect(theList).toEqual([
			{
				id: 0,
				pos: 1,
			},
			{
				id: 1,
				pos: 2,
			},
			{
				id: 2,
				pos: 3,
			},
			{
				id: 3,
				pos: 0,
			},
		])
	})
	it('can re-arrange item from top to bottom', async () => {
		const wrapper = shallowMount(dragDrop, {
			propsData: {
				theList,
			},
		})
		await wrapper.vm.newPos(theList, 0, 3)
		expect(theList).toEqual([
			{
				id: 0,
				pos: 3,
			},
			{
				id: 1,
				pos: 0,
			},
			{
				id: 2,
				pos: 1,
			},
			{
				id: 3,
				pos: 2,
			},
		])
	})
	it('can re-arrange item from 3rd to 2nd', async () => {
		const wrapper = shallowMount(dragDrop, {
			propsData: {
				theList,
			},
		})
		await wrapper.vm.newPos(theList, 2, 1)
		expect(theList).toEqual([
			{
				id: 0,
				pos: 0,
			},
			{
				id: 1,
				pos: 2,
			},
			{
				id: 2,
				pos: 1,
			},
			{
				id: 3,
				pos: 3,
			},
		])
	})
	it('can re-arrange item from 2rd to 3nd', async () => {
		const wrapper = shallowMount(dragDrop, {
			propsData: {
				theList,
			},
		})
		await wrapper.vm.newPos(theList, 1, 2)
		expect(theList).toEqual([
			{
				id: 0,
				pos: 0,
			},
			{
				id: 1,
				pos: 2,
			},
			{
				id: 2,
				pos: 1,
			},
			{
				id: 3,
				pos: 3,
			},
		])
	})
})
