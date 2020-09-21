import { Op } from 'sequelize';
import { lastDayOfMonth, startOfMonth, parseISO } from 'date-fns';
import Workout from '../models/Workout';

class WorkoutController {
  async store(req, res) {
    const { name, categories, startDate, description } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Field name required' });
    }

    if (!categories || !categories.length) {
      return res.status(400).json({ error: 'Field category required' });
    }

    if (!startDate) {
      return res.status(400).json({ error: 'Fields startDate required' });
    }

    const values = {
      name,
      startDate,
      description,
    };

    const newWorkout = await Workout.create(values);

    await newWorkout.setCategories(categories);

    return res.json({ workout: newWorkout?.dataValues });
  }

  async index(req, res) {
    const workouts = await Workout.findAndCountAll({
      attributes: ['id', 'name', 'description', 'startDate'],
      order: [['id']],
    });

    return res.json(workouts);
  }

  async pagination(req, res) {
    const { page } = req.params;
    const { startDate } = req.query;

    const firstDate = startOfMonth(parseISO(startDate));
    const endDate = lastDayOfMonth(parseISO(startDate));

    const limit = 20;
    const offset = page > 1 ? (page - 1) * limit : 0;

    const workouts = await Workout.findAndCountAll({
      where: {
        startDate: {
          [Op.between]: [firstDate, endDate],
        },
      },
      limit,
      offset,
      order: [['id', 'ASC']],
    });

    const totalPages = Math.ceil(workouts.count / limit);

    const response = {
      currentPage: page,
      totalItems: workouts.count,
      totalPages,
      rows: workouts.rows,
    };

    res.send(response);
  }
}

export default new WorkoutController();
