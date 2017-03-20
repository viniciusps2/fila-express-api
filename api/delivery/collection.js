const {Schema} = require('mongoose')
const {ObjectId} = Schema.Types

const Position = {
  latitude: Number,
  longitude: Number
}

const Veicle = {
  color: String,
  model: String,
  board: String
}

class Delivery extends Schema {
  constructor () {
    super({
      deliveryMan: {
        identityId: ObjectId,
        firstName: String,
        lastName: String
      },
      passengers: [{
        _id: ObjectId, // studentId
        firstName: String,
        lastName: String,
      }],
      establishment: ObjectId, // schoolId
      veicle: Veicle,
      coursePositions: [Position],
      status: {type: String, enum: ['on_course', 'arrived', 'delivered']},
      userEstimate: Number, // Minutes
      computedEstimate: Number,
      estimatedAt: Date,
      createdAt: Date
    })
  }
}
