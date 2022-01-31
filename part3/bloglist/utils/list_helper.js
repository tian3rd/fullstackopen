const _ = require("lodash");

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((prev, curr) => {
    return prev + curr.likes;
  }, 0);
};

const favoriteBlog = (blogs) => {
  const maxLikes = Math.max(...blogs.map((blog) => blog.likes));
  return blogs.find((blog) => blog.likes === maxLikes);
};

const mostBlogs = (blogs) => {
  // how to use lodash to filter by value / find out k-v pair with highest value?
  const blogsAuthors = _.countBy(blogs, "author");
  const maxBlogs = Math.max(...Object.values(blogsAuthors));
  const maxBlogAuthor = Object.keys(blogsAuthors).find(
    (author) => blogsAuthors[author] === maxBlogs
  );
  return { author: maxBlogAuthor, blogs: maxBlogs };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
};
