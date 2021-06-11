'use strict'
const connectDb = require('./db');
const { ObjectId } = require('mongodb')
const errorHandler = require('./errorHandler')

module.exports = {
  courses: async () => {
    try {
      const db = await connectDb()
      const courses = await db.collection('courses').find().toArray()
      console.log('GET courses successful');
      return courses
    } catch (error) {
      errorHandler(error)
    }
  },
  course: async (root, { id }) => {
    try {
      const db = await connectDb()
      const course = await db.collection('courses').findOne({ _id: ObjectId(id) })
      console.log(`GET course with id: ${id} successful`);
      console.log(course);
      return course
    } catch (error) {
      errorHandler(error)
    }
  },
  students: async () => {
    try {
      const db = await connectDb()
      const students = await db.collection('students').find().toArray()
      console.log('GET students successful');
      return students
    } catch (error) {
      errorHandler(error)
    }
  },
  student: async (root, { id }) => {
    try {
      const db = await connectDb()
      const student = await db.collection('students').findOne({ _id: ObjectId(id) })
      console.log(`GET student with id: ${id} successful`);
      return student
    } catch (error) {
      errorHandler(error)
    }
  },
}

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