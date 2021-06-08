const ScheduleTC = require('@app/module/carwash/types')
const resolvers = require('@app/module/carwash/resolvers')

for (const resolver in resolvers) {
  ScheduleTC.addResolver(resolvers[resolver])
}

module.exports = ScheduleTC
