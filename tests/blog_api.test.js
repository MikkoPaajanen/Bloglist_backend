const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

describe('blogs use id instead of _id', () => {
  test('id', async () => {
    const response = await api.get('/api/blogs')
    console.log(response.body[0].id)
    expect(response.body[0].id).toBeDefined()
  })
})



afterAll(() => {
  mongoose.connection.close()
})