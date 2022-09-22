export function CustomError(errorData) {
  this.name = this.constructor.name
  this.message = errorData.message
  this.body = errorData.body
  Error.captureStackTrace(this, this.constructor)
}

CustomError.prototype = new Error()

export default CustomError
