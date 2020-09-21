/* eslint-disable no-await-in-loop */
module.exports = {
  up: async (queryInterface) => {
    const workouts = [];

    for (let i = 0; i < 100; i++) {
      const startDate = new Date();
      if (i === 20 || i === 40 || i === 80) {
        startDate.setDate(startDate.getDate() + 2);
      } else if (i % 5 === 0) {
        startDate.setDate(startDate.getDate() + 1);
      } else if (i % 3 === 0) {
        startDate.setDate(startDate.getDate() + 10);
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
