const {Schema} = require('mongoose')
const {ObjectId} = Schema

const Student = require('../student/collection')

const Veicle = {
  color: String,
  model: String,
  board: String
}

class Identity extends Schema {
  constructor () {
    super({
      firstName: String,
      lastName: String,
      photo: String,
      login: String,
      password: String,
      googleToken: String,
      role: {type: String, enum: ['school_admin', 'school_doorman', 'responsible']},
      phone: String,
      email: String,
      veicles: [Veicle],
      status: {type: String, enum: ['inactive', 'active']},
      createdAt: Date,
      school: ObjectId
    })
  }
}
