/* eslint-disable no-await-in-loop */
module.exports = {
  up: async (queryInterface) => {
    const workouts = [];

    for (let i = 0; i < 120; i++) {
      const startDate = new Date('2020-09-01');

      if (i === 30) {
        startDate.setDate(startDate.getMonth() + 1);
      } else if (i === 60) {
        startDate.setDate(startDate.getMonth() + 2);
      } else if (i === 90) {
        startDate.setDate(startDate.getMonth() + 3);
      } else {
        startDate.setDate(startDate.getMonth() + 4);
      }

      const workout = {
        name: `Workout ${i + 1}`,
        startDate,
      };

      workouts.push(workout);
    }

    const result = await queryInterface.bulkInsert('workout', workouts, {
      returning: ['id'],
    });
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('workout', null, {});
  },
};
