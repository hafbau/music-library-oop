const MusicLibrary = require("../music-library")
const Library = MusicLibrary.Library;
const Playlist = MusicLibrary.Playlist;

describe("addPlaylist method in a library instance", function() {

  const myLib = new Library("myHiphop", "dan");
  
  it("should be a function", function() {
    expect(typeof myLib.addPlaylist).toBe("function");
  });

  // it("should only accept playlist object", function() {
  //   expect(myLib.addPlaylist("not a playlist")).toThrowError(TypeError);
  // });

  it("should add to the library's instance playlist", function() {
    myLib.addPlaylist(new Playlist("90's hiphop"));
    expect(myLib.playlists.length).toBeGreaterThan(0);
  })
});