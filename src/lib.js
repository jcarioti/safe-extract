module.exports = function (obj, squeeze) {
  try {
    return squeeze(obj);
  } catch (e) {
    return undefined;
  }
}
