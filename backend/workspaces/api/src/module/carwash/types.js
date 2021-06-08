const { schemaComposer } = require('graphql-compose')
const { composeWithMongoose } = require('graphql-compose-mongoose')

const ScheduleModel = require('@app/module/carwash/schedule')

const ScheduleTC = composeWithMongoose(ScheduleModel)

schemaComposer.createObjectTC({
  name: 'SavedSchedule',
  fields: {
    userId: 'String!',
    scheduledAt: 'Date!'
  }
})

module.exports = ScheduleTC
