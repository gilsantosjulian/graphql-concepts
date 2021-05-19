// Resolvers configuration
const courses = [
  {
    _id: 's1',
    title: 'My title',
    teacher: 'My teacher',
    description: 'One description',
    topic: 'development',
  },
  {
    _id: '2',
    title: 'My title 2',
    teacher: 'My teacher',
    description: 'One description',
    topic: 'development',
  },
  {
    _id: '3',
    title: 'My title 3',
    teacher: 'My teacher',
    description: 'One description',
    topic: 'development',
  }
]

const resolvers = {
  Query: {
    courses: () => {
      return courses
    },
    course: (root, args) => {
      const course = courses.filter( course => course._id === args.id )
      return course.pop()
    },
  }
}

module.exports = {
  resolvers,
}