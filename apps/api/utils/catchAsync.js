/* eslint-disable arrow-body-style */
export default fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(err => next(err));
  };
};
