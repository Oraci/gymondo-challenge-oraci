import Category from '../models/Category';

class CategoryController {
  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Field name required' });
    }

    const exists = await Category.findOne({
      where: { name: req.body.name },
      attributes: ['id'],
    });

    if (exists) {
      return res.status(400).json({ error: 'Category already exists.' });
    }

    const result = await Category.create(req.body);

    return res.json({ category: result?.dataValues });
  }

  async index(req, res) {
    const categories = await Category.findAll({
      attributes: ['id', 'name', 'description'],
      order: [['name']],
    });

    return res.json(categories);
  }
}

export default new CategoryController();
