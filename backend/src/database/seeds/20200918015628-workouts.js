/* eslint-disable no-await-in-loop */
module.exports = {
  up: async (queryInterface) => {
    const workouts = [];
    const workoutsCategories1 = [];
    const workoutsCategories2 = [];
    const workoutsCategories3 = [];
    const workoutsCategories4 = [];
    const workoutsCategories5 = [];
    const workoutsCategories6 = [];
    const workoutsCategories7 = [];

    for (let i = 1; i < 1001; i++) {
      const startDate = new Date('2020-09-10');

      let description =
        'Lose weight, tone up and get in the best shape of your life. A dynamic mix of cardio and full-body toning workouts is waiting just for you.';
      if (i % 5) {
        description =
          'Watch as your body fat disappears with these challenging (and fun) total-body cardio workouts.';
      }

      const workout = {
        name: `Workout ${i}`,
        description,
        startDate,
        createdAt: startDate,
        updatedAt: startDate,
      };

      workouts.push(workout);

      const workoutCategory1 = {
        workoutId: i,
        categoryId: 1,
        createdAt: startDate,
        updatedAt: startDate,
      };

      workoutsCategories1.push(workoutCategory1);

      const workoutCategory2 = {
        workoutId: i,
        categoryId: 2,
        createdAt: startDate,
        updatedAt: startDate,
      };

      workoutsCategories2.push(workoutCategory2);

      const workoutCategory3 = {
        workoutId: i,
        categoryId: 3,
        createdAt: startDate,
        updatedAt: startDate,
      };

      workoutsCategories3.push(workoutCategory3);

      const workoutCategory4 = {
        workoutId: i,
        categoryId: 4,
        createdAt: startDate,
        updatedAt: startDate,
      };

      workoutsCategories4.push(workoutCategory4);

      const workoutCategory5 = {
        workoutId: i,
        categoryId: 5,
        createdAt: startDate,
        updatedAt: startDate,
      };

      workoutsCategories5.push(workoutCategory5);

      const workoutCategory6 = {
        workoutId: i,
        categoryId: 6,
        createdAt: startDate,
        updatedAt: startDate,
      };

      workoutsCategories6.push(workoutCategory6);

      const workoutCategory7 = {
        workoutId: i,
        categoryId: 7,
        createdAt: startDate,
        updatedAt: startDate,
      };

      workoutsCategories7.push(workoutCategory7);
    }

    await queryInterface.bulkInsert('workout', workouts);
    await queryInterface.bulkInsert('workoutCategory', workoutsCategories1);
    await queryInterface.bulkInsert('workoutCategory', workoutsCategories2);
    await queryInterface.bulkInsert('workoutCategory', workoutsCategories3);
    await queryInterface.bulkInsert('workoutCategory', workoutsCategories4);
    await queryInterface.bulkInsert('workoutCategory', workoutsCategories5);
    await queryInterface.bulkInsert('workoutCategory', workoutsCategories6);
    await queryInterface.bulkInsert('workoutCategory', workoutsCategories7);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('workoutCategory', null, {});
    await queryInterface.bulkDelete('workout', null, {});
  },
};
