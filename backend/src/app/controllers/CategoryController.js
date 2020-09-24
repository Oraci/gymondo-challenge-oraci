import Category from '../models/Category';

class CategoryController {
  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      res.status(400).send({ error: 'Field name required' });
    }

    const exists = await Category.findOne({
      where: { name: req.body.name },
      attributes: ['id'],
    });

    if (exists) {
      res.status(400).send({ error: 'Category already exists.' });
    }

    Category.create(req.body)
      .then((result) => {
        res.send({ category: result?.dataValues });
      })
      .catch(() => {
        res
          .status(400)
          .send({ message: 'It was not possible to create the category.' });
      });
  }

  async index(req, res) {
    Category.findAll({
      attributes: ['id', 'name'],
      order: [['id', 'ASC']],
    })
      .then((categories) => {
        res.send(categories);
      })
      .catch(() => {
        res.status(400).send({ message: 'Categories not found.' });
      });
  }
}

export default new CategoryController();
