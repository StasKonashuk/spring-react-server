const validate = (params, schema) => {
  const options = {
    allowUnknown: true,
    abortEarly: false,
  };
  const { error } = schema.validate(params, options);
  if (error) {
    const errors = {};
    error.details.forEach((x) => {
      errors[`${x.path}Error`] = x.message;
    });
    return {
      error: true,
      detail: errors,
    };
  }
  return { error: false, params };
};

module.exports = validate;
