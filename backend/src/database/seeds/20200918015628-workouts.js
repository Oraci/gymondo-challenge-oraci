/* eslint-disable no-await-in-loop */
module.exports = {
  up: async (queryInterface) => {
    const workouts = [];

    for (let i = 0; i < 100; i++) {
      const workout = {
        name: `Workout ${i + 1}`,
        startDate: new Date(),
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
