/* eslint-disable no-console */
const ScheduleModel = require('@app/module/carwash/schedule')

const schedule = {
  name: 'schedule',
  type: 'Schedule!',
  resolve: ({ context: { schedule } }) => schedule
}

const saveSchedule = {
  name: 'saveSchedule', // Nome do metodo ou query GraphQL
  type: 'SavedSchedule!', // Tipo do retorno GraphQL
  args: {
    scheduledAt: 'Date!'
  },
  resolve: async ({ args: { scheduledAt }, context: { user } }) => {
    try {
      const scheduleDate = new Date(scheduledAt)

      const canSchedule = await ScheduleModel.canSchedule(scheduleDate)
      if (!canSchedule) {
        return Promise.reject(new Error('Horário com limite de agendamentos'))
      }

      let scheduleResult = await new ScheduleModel({
        userId: user.id,
        scheduledAt: scheduleDate
      }).save()
      return scheduleResult
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

module.exports = {
  schedule,
  saveSchedule
}
