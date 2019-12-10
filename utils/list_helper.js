const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reduced = blogs.reduce((sum, blog) => sum + blog.likes, 0)
  return reduced
}

module.exports = {
  dummy,
  totalLikes
}