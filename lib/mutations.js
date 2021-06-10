'use strict'
const { ObjectId } = require('mongodb');
const connectDb = require('./db');
const errorHandler = require('./errorHandler')

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
      errorHandler(error)
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
      errorHandler(error)
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
      errorHandler(error)
    }
  },
  addPeople: async (root, { courseID, personID }) => {
    try {
      const db = await connectDb()
      const course = await db.collection('courses').findOne({ _id: ObjectId(courseID) })
      const person = await db.collection('students').findOne({ _id: ObjectId(personID) })

      if(!course || !person) throw new Error('Course or Person not exists')

      await db.collection('courses').updateOne(
        { _id: ObjectId(courseID) },
        { $addToSet: { people: ObjectId(personID) } }
      )

      return course

    } catch (error) {
      errorHandler(error)
    }
  },
  createPerson: async (root, { input }) => {
    try {
      const db = await connectDb()
      const person = await db.collection('students').insertOne(input)
      input._id = person.insertedId
      console.log(`CREATE Person with id: ${input._id} successful`);
    } catch (error) {
      errorHandler(error)
    }
    return input
  },
  editPerson: async (root, { _id, input }) => {
    try {
      const db = await connectDb()
      await db.collection('students').updateOne(
        { _id: ObjectId(_id) },
        { $set: input }
      )
      const person = await db.collection('students').findOne({ _id: ObjectId(_id) })
      console.log(`EDIT Person with id: ${input._id} successful`);
      return person
    } catch (error) {
      errorHandler(error)
    }
    return input
  },
  deletePerson: async (root, { _id }) => {
    try {
      const db = await connectDb()
      const personDeleted = await db.collection('students').findOne({ _id: ObjectId(_id) })
      await db.collection('students').remove(
        { _id: ObjectId(_id) }
      )
      console.log(`DELETE Person with id: ${personDeleted._id} successful`);
      return personDeleted
    } catch (error) {
      errorHandler(error)
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