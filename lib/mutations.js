'use strict'
const { ObjectId } = require('bson');
const connectDb = require('./db');

module.exports = {
  createCourse: async (root, { input }) => {
    const defaults = {
      teacher: '',
      topic: ''
    }
    const newCourse = Object.assign(defaults, input)
    try {
      const db = await connectDb()
      const course = await db.collection('courses').insertOne(newCourse)
      newCourse._id = course.insertedId
      console.log(`CREATE course with id: ${newCourse._id} successful`);
    } catch (error) {
      console.error(error);
    }
    return newCourse
  },
  editCourse: async (root, { _id, input }) => {
    try {
      const db = await connectDb()
      await db.collection('courses').updateOne(
        { _id: ObjectId(_id) },
        { $set: input }
      )
      const course = await db.collection('courses').findOne({ _id: ObjectId(_id) })
      console.log(`EDIT Course with id: ${input._id} successful`);
      return course
    } catch (error) {
      console.error(error);
    }
    return input
  },
  deleteCourse: async (root, { _id }) => {
    try {
      const db = await connectDb()
      const courseDeleted = await db.collection('courses').findOne({ _id: ObjectId(_id) })
      await db.collection('courses').remove( // we can use deleteOne, also we can get here 'deletedCount'
        { _id: ObjectId(_id) }
      )
      console.log(`DELETE Course with id: ${courseDeleted._id} successful`);
      return courseDeleted
    } catch (error) {
      console.error(error);
    }
  },
  createStudent: async (root, { input }) => {
    try {
      const db = await connectDb()
      const student = await db.collection('students').insertOne(input)
      input._id = student.insertedId
      console.log(`CREATE Student with id: ${input._id} successful`);
    } catch (error) {
      console.error(error);
    }
    return input
  },
  editStudent: async (root, { _id, input }) => {
    try {
      const db = await connectDb()
      await db.collection('students').updateOne(
        { _id: ObjectId(_id) },
        { $set: input }
      )
      const student = await db.collection('students').findOne({ _id: ObjectId(_id) })
      console.log(`EDIT Student with id: ${input._id} successful`);
      return student
    } catch (error) {
      console.error(error);
    }
    return input
  },
  deleteStudent: async (root, { _id }) => {
    try {
      const db = await connectDb()
      const studentDeleted = await db.collection('students').findOne({ _id: ObjectId(_id) })
      await db.collection('students').remove(
        { _id: ObjectId(_id) }
      )
      console.log(`DELETE Student with id: ${studentDeleted._id} successful`);
      return studentDeleted
    } catch (error) {
      console.error(error);
    }
  },
}

/**
  mutation {
   createCourse(input: {
     title: "Curso de ejemplo 4",
     description: "Descripción 4",
     topic: "diseño",
   }) {
     _id
     title
     description
   }
  }
 */

/**
  mutation {
   createStudent(input: {
     name: "Student 1",
     email: "student1@gmail.com"
   }) {
     _id
     name
     email
   }
  }
 */