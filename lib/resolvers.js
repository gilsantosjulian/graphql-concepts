// Resolvers configuration
const courses = [
  {
    _id: 'anyid',
    title: 'My title',
    teacher: 'My teacher',
    description: 'One description',
    topic: 'development',
  },
  {
    _id: 'anyid',
    title: 'My title 2',
    teacher: 'My teacher',
    description: 'One description',
    topic: 'development',
  },
  {
    _id: 'anyid',
    title: 'My title 3',
    teacher: 'My teacher',
    description: 'One description',
    topic: 'development',
  }
]

const resolvers = {
  courses: () => {
    return courses
  },
}

module.exports = {
  resolvers,
}