'use strict'
const connectDb = require('./db');
const { ObjectId } = require('mongodb')

module.exports = {
  courses: async () => {
    try {
      const db = await connectDb()
      const courses = await db.collection('courses').find().toArray()
      console.log('GET courses successful');
      return courses
    } catch (error) {
      console.error(error);
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
      console.error(error);
    }
  },
  students: async () => {
    try {
      const db = await connectDb()
      const students = await db.collection('students').find().toArray()
      console.log('GET students successful');
      return students
    } catch (error) {
      console.error(error);
    }
  },
  student: async (root, { id }) => {
    try {
      const db = await connectDb()
      const student = await db.collection('students').findOne({ _id: ObjectId(id) })
      console.log(`GET student with id: ${id} successful`);
      return student
    } catch (error) {
      console.error(error);
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