const mongoose = require('@app/mongoose')

const { Schema } = mongoose

const scheduleSchema = new Schema(
  {
    userId: String,
    scheduledAt: Date
  },
  { timestamps: true }
)

// Método que vai verificar se é possível fazer um agendamento em uma data
// seguindo a regra que no máximo 3 agendamentos podem existir no mesmo horário
//
// Retorna true se for possível agendar
scheduleSchema.statics.canSchedule = async function (date) {
  let results = await this.find({ scheduledAt: date })
  return results.length < 3
}

const Schedule = mongoose.model('Schedule', scheduleSchema)

module.exports = Schedule
