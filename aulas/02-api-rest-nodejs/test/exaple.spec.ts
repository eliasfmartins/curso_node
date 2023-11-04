import { expect, test } from 'vitest'

test('o usuario consegue criar uma nova transacao', () => {
  const reponseStatusCode = 201
  expect(reponseStatusCode).toEqual(201)
})
