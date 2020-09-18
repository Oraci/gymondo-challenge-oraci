import Sequelize from 'sequelize';

import Workout from '../app/models/Workout';
import Category from '../app/models/Category';

import databaseConfig from '../config/database';

const sqlite3 = require('sqlite3').verbose();

const models = [Workout, Category];

class Database {
  constructor() {
    this.init();
    this.sqlLite();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    this.connection
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
      });

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

  sqlLite() {
    this.sqlLiteConnection = new sqlite3.Database(
      '../../workout.sqlite',
      (err) => {
        if (err) {
          console.error(err.message);
        }

        console.log('Connected to the workout database.');
      }
    );
  }
}

export default new Database();
