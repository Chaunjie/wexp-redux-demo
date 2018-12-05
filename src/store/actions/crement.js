import { ASYNC_INCREMENT, INCREMENT, DECREMENT } from '../types/crement'
import { createAction } from 'redux-actions'

export const asyncInc = createAction(ASYNC_INCREMENT, () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve({num: 1})
		}, 1000)
	})
})

export const inCrement = createAction(INCREMENT, () => {
	return new Promise(resolve => {
		resolve()
	})
})

export const desCrement = createAction(DECREMENT, () => {
	return new Promise(resolve => {
		setTimeout()
	})
})
