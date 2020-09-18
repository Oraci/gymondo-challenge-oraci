import Sequelize, { Model } from 'sequelize';

class Workout extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        startDate: Sequelize.DATEONLY,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Category, {
      as: 'categories',
      through: 'workoutCategory',
    });
  }
}

export default Workout;
