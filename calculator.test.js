
import { add } from './calculator'
import { expect, test } from 'vitest'

const x = 13
const y = 0

test('Add numbers using the add method', () => {
     expect(add(x, y)).toBe(13)
})


