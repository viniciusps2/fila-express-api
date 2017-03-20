const {Schema} = require('mongoose')
const {ObjectId} = Schema

const Responsible = require('../responsible/collection')

class Student extends Schema {
  constructor () {
    super({
      schoolId: ObjectId,
      registrationId: String,
      firstName: String,
      lastName: String,
      dateOfBirth: Date,
      phone: String,
      email: String,
      cpf: String,
      rg: String,
      status: {type: String, enum: ['inactive', 'active']},
      period: String,
      classrom: String,
      responsibles: [{
        identityId: ObjectId,
        relation: {type: String, enum: ['parents', 'relatives', 'driver']}
      }],
      responsibleRequests: [ObjectId],
      createdAt: Date,
      note: String
    })
  }

  createDelivery () {

  }
}
