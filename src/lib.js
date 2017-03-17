module.exports = function (obj, squeeze) {
  try {
    return func(squeeze);
  } catch (e) {
    return undefined;
  }
}
