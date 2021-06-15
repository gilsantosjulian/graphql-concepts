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
  people: async () => {
    try {
      const db = await connectDb()
      const people = await db.collection('students').find().toArray()
      console.log('GET people successful');
      return people
    } catch (error) {
      errorHandler(error)
    }
  },
  person: async (root, { id }) => {
    try {
      const db = await connectDb()
      const person = await db.collection('students').findOne({ _id: ObjectId(id) })
      console.log(`GET person with id: ${id} successful`);
      return person
    } catch (error) {
      errorHandler(error)
    }
  },
  searchItems: async (root, { keyword }) => {
    try {
      const db = await connectDb()
      const courses = await db.collection('courses').find({ $text: { $search: keyword } }).toArray()
      const people = await db.collection('students').find({ $text: { $search: keyword } }).toArray()
      const items = [...courses, ...people]
      console.log(`GET searchItems with keyword: ${keyword} successful`);
      return items
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