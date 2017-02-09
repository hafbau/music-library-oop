module.exports = Playlist;

function Playlist(name) {
  try {
    if (name) {
      if (typeof name === 'string') {
        this.name = name;
        this.tracks = [];
      } else {
        throw TypeError("Playlist name should be a string");
      }
    } else {
      throw TypeError("Playlist name should be defined");
    }
  } catch(err) {
    console.log(err.name + ":" + err.message, err.stack);
  }
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
}

Playlist.prototype.overallRating = function() {
  let accumulator = this.tracks[0];
  if (!accumulator) { return }
  return this.tracks.reduce(function(accum, track) {
    return Math.round((accum + track.rating) * 10 / 2) / 10; // This is to get a one decimal place rounding
  }, accumulator.rating);
}

Playlist.prototype.totalDuration = function() {
  return this.tracks.reduce(function(sum, track) {
    return sum + track.length;
  }, 0);
}