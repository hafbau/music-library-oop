module.exports = Track;

function Track(title, rating, length) {
  try {
    if (title && rating && length) {
      if ((typeof title === "string") &&
          Number.isInteger(rating) &&
          Number.isInteger(length)) {
        if ((rating > 0) && (rating < 6) && (length > 0)) {
          this.title = title;
          this.rating = rating;
          this.length = length;
        } else {
          throw Error("Track rating must be in the range 1-5 inclusive and Track length (duration) must be greater than 0");
        }
      } else {
        throw TypeError("Track title must be a string, rating an integer and length also an integer");
      }
    } else {
      throw Error("Title, Rating and Length of track must be supplied");
    }
  } catch(err) {
    console.log(err.name + ":" + err.message, err.stack);
  }
}