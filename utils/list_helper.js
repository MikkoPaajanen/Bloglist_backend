const _ = require('lodash')
const dummy = (blogs) => {
  console.log(blogs)
  return 1
}

// this file has fake functions to learn testing

// function that sums all likes together
const totalLikes = (blogs) => blogs.reduce((sum, blog) => sum + blog.likes, 0)

// function that finds blog with most likes
const favoriteBlog = (blogs) => {
  const mostLikes = () => blogs.reduce((prev, current) => (prev > current.likes) ? prev : current.likes, 0)
  console.log(blogs.find(blog => blog.likes === mostLikes()))
  return blogs.find(blog => blog.likes === mostLikes())
}

// function that finds which author has most blogs
const mostBlogs = (blogs) => {
  const who = _(blogs).countBy('author').entries().max()
  console.log({ author: who[0], blogs: who[1] })
  return { author: who[0], blogs: who[1] }
}

// function that finds which author has most likes total in blogs
const mostLikes = (blogs) => {
  const who = _(blogs)
    .groupBy('author')
    .map((objects, author) => ({
      author,
      'likes': _.sumBy(objects, 'likes')
    }))
    .value()
  console.log('who', who)
  const max = _.maxBy(who, 'likes')
  console.log('max', max)
  return max
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}