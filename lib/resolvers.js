// Resolvers configuration
const connectDb = require('./db')
const { ObjectId } = require('mongodb')

/**
 *  Queries
 {
  course(id: ) {
    _id
    title
    description
  }
}

{
  courses {
    _id
    title
    description
  }
}
 */

const resolvers = {
  Query: {
    courses: async () => {
      let db
      let courses = []
      try {
        db = await connectDb()
        courses = await db.collection('courses').find().toArray()
        console.log('GET courses successful');
      } catch (error) {
        console.error(error);
      }
      return courses
    },
    course: async (root, { id }) => {
      let db
      let course = []
      try {
        db = await connectDb()
        courses = await db.collection('courses').findOne({ _id: ObjectId(id) })
        console.log(`GET course with id: ${id} successful`);
      } catch (error) {
        console.error(error);
      }
      return course
    },
  }
}

module.exports = {
  resolvers,
}




