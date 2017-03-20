const {Schema} = require('mongoose')
const {ObjectId} = Schema.Types

const Position = {
  latitude: Number,
  longitude: Number
}

const period = {
  name: String,
  startHour: Number,
  startMinute: Number,
  finishHour: Number,
  finishMinute: Number,
  deliveryStartHour: Number,
  deliveryStartMinute: Number,
  deliveryFinishHour: Number,
  deliveryFinishMinute: Number
}

class School extends Schema {
  constructor () {
    super({
      name: String,
      email: String,
      status: {type: String, enum: ['inactive', 'active']},
      periodAvailable: [period],
      address: String,
      geolocation: Position,
      createdAt: Date
    })
  }
}
