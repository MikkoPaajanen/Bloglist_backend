const dummy = (blogs) => {
  console.log(blogs)
  return 1
}


const totalLikes = (blogs) => blogs.reduce((sum, blog) => sum + blog.likes, 0)


const favoriteBlog = (blogs) => {
  const mostLikes = () => blogs.reduce((prev, current) => (prev > current.likes) ? prev : current.likes, 0)
  console.log(blogs.find(blog => blog.likes === mostLikes()))
  return blogs.find(blog => blog.likes === mostLikes())
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}