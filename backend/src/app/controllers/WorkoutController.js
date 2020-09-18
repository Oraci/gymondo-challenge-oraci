import Workout from '../models/Workout';

class WorkoutController {
  async store(req, res) {
    const { name, categories, startDate } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Field name required' });
    }

    if (!categories || !categories.length) {
      return res.status(400).json({ error: 'Field category required' });
    }

    if (!startDate) {
      return res.status(400).json({ error: 'Fields startDate required' });
    }

    const newWorkout = await Workout.create(req.body);

    await newWorkout.setCategories(req.body.categories);

    return res.json({ workout: newWorkout?.dataValues });
  }

  async index(req, res) {
    const workouts = await Workout.findAll({
      attributes: ['id', 'name', 'description', 'startDate'],
      order: [['name']],
    });

    return res.json(workouts);
  }
}

export default new WorkoutController();
