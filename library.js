module.exports = Library;

function Library(name, creator) {
  try {
    if (name && creator) {
      if ((typeof name === 'string') && (typeof creator === 'string')) {
        this.name = name;
        this.creator = creator;
        this.playlists = [];
      } else {
        throw TypeError("Library name and creator should be strings");
      }
    } else {
      throw TypeError("Both library name and creator should be defined");
    }
  } catch(err) {
    console.log(err.name + ":" + err.message, err.stack);
  }
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
}