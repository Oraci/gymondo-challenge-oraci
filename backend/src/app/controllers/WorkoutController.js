import { string, object } from 'yup';
import Workout from '../models/Workout';

class WorkoutController {
  async store(req, res) {
    const schema = object().shape({
      name: string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Field name required' });
    }

    const exists = await Workout.findOne({
      where: { name: req.body.name },
      attributes: ['id'],
    });

    if (exists) {
      return res.status(400).json({ error: 'Workout already exists.' });
    }

    const result = await Workout.create(req.body);

    return res.json({ workout: result?.dataValues });
  }

  async index(req, res) {
    const categories = await Workout.findAll({
      attributes: ['id', 'name', 'description'],
      order: [['name']],
    });

    return res.json(categories);
  }
}

export default new WorkoutController();
