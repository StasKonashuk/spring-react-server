const schema = require('../validators/schema');

const validator = (req, res, next) => {
  try {
    const { userName, password, repeatPassword, firstName, lastName, age } =
      req.body;
    const options = {
      allowUnknown: true,
      abortEarly: false,
    };
    const { error } = schema.validate(
      { userName, password, repeatPassword, firstName, lastName, age },
      options
    );
    if (error) {
      const errors = {};
      error.details.forEach((x) => {
        errors[`${x.path}Error`] = x.message;
      });
      return res.status(400).json({ error: errors });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = validator;
