const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

// test to see if blogs are returned as json

test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

// test that data retreived from database uses id instead of _id

describe('blogs use id instead of _id', () => {
  test('id', async () => {
    const newBlog = {
      title: 'blogi',
      author: 'minä',
      url: 'www.jotain.com',
      likes: '13'
    }
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
    const response = await api.get('/api/blogs')
    console.log(response.body[0].id)
    expect(response.body[0].id).toBeDefined()
  })
})

// test that http post request adds a blog

describe('HTTP POST adds blog', () => {
  test('HTTP POST adds blog', async () => {
    const newBlog = {
      title: 'blogi',
      author: 'minä',
      url: 'www.jotain.com',
      likes: '13'
    }
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
    const response = await api.get('/api/blogs')
    expect(response.body.length).toBe(1)
  })
})

// test that if likes are empty when posting blog it returns as 0 not undefined or null

describe('likes are empty', () => {
  test('likes are empty', async () => {
    const newBlog = {
      title: 'blogi',
      author: 'minä',
      url: 'www.jotain.com',
      likes: ''
    }
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(201)
    const response = await api.get('/api/blogs')
    console.log('response.body', response.body[0].likes)
    expect(response.body[0].likes).toBe(0)
  })
})

// test that makes sure you can't post anything without title and url or you'll get status(400)

describe('includes title and url', () => {
  test('includes title and url', async () => {
    const newBlog = {
      title: '',
      author: 'minä',
      url: '',
      likes: '13'
    }
    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(400)
  })
})

// deletes all blogs from test database before running tests

beforeEach(async () => {
  await Blog.deleteMany({})

})

// closes connection after all tests are done

afterAll(() => {
  mongoose.connection.close()
})