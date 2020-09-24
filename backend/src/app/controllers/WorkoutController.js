import { Op, literal } from 'sequelize';
import { lastDayOfMonth, startOfMonth, parseISO } from 'date-fns';
import Workout from '../models/Workout';
import Category from '../models/Category';

class WorkoutController {
  async store(req, res) {
    const { name, categories, startDate, description } = req.body;

    if (!name) {
      res.status(400).send({ error: 'Field name required' });
    }

    if (!categories || !categories.length) {
      res.status(400).send({ error: 'Field category required' });
    }

    if (!startDate) {
      res.status(400).send({ error: 'Fields startDate required' });
    }

    const values = {
      name,
      startDate,
      description,
    };

    Workout.create(values)
      .then((newWorkout) => {
        newWorkout
          .setCategories(categories)
          .then(() => {
            res.send({ workout: newWorkout?.dataValues });
          })
          .catch(() => {
            res.status(400).send({
              message:
                'It was not possible to insert the categories into workout.',
            });
          });
      })
      .catch(() => {
        res
          .status(400)
          .send({ message: 'It was not possible to create the workout.' });
      });
  }

  async index(req, res) {
    Workout.findAndCountAll({
      attributes: ['id', 'name', 'description', 'startDate'],
      order: [['id']],
    })
      .then((workouts) => {
        res.send(workouts);
      })
      .catch(() => {
        res.status(400).send({ message: 'Workouts not found.' });
      });
  }

  async pagination(req, res) {
    const { page } = req.params;
    const { startDate, categories } = req.query;

    const firstDate = startOfMonth(parseISO(startDate));
    const endDate = lastDayOfMonth(parseISO(startDate));

    const limit = 20;
    const offset = page > 1 ? (page - 1) * limit : 0;

    const include = [];
    const attributes = ['id', 'name', 'startDate', 'description'];

    attributes.push([
      literal(
        `(select GROUP_CONCAT((select b.name from category b where  b.id = a.categoryId), ',
        ') name from workoutCategory a where a.workoutId = workout.id)`
      ),
      'categoriesNames',
    ]);

    if (categories) {
      include.push({
        model: Category,
        as: 'categories',
        where: { id: { [Op.in]: categories } },
        through: {
          attributes: [],
        },
        attributes: [],
      });
    }

    Workout.findAndCountAll({
      where: {
        startDate: {
          [Op.between]: [firstDate, endDate],
        },
      },
      distinct: true,
      include,
      attributes,
      limit,
      offset,
      order: [['id', 'ASC']],
    })
      .then((workouts) => {
        const totalPages = Math.ceil(workouts.count / limit);

        const response = {
          currentPage: page,
          totalItems: workouts.count,
          totalPages,
          rows: workouts.rows,
        };

        res.send(response);
      })
      .catch(() => {
        res.status(400).send({ message: 'Workouts not found.' });
      });
  }
}

export default new WorkoutController();
