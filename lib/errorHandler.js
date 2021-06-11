'use strict'

const ERROR_MESSAGE = 'Failed server operation'

function errorHandler (error) {
  console.error(error);
  throw new Error(ERROR_MESSAGE)
}

module.exports = errorHandler