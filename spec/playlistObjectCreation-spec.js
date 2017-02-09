const Playlist = require("../music-library").Playlist;

describe("creating a playlist object", function() {
  it("should have the name passed to constructor", function() {
    const myPlaylist = new Playlist("90's Raps");
    expect(myPlaylist.name).toEqual("90's Raps");
  });

  // it("should throw if no name is passed", function() {
  // expect(new Playlist()).toThrow();
  // });

  // it("should only accept string as name", function() {
  //   expect(new Playlist(['name'], 42)).toThrowError(TypeError);
  // });

  // it("should throw error when white space is passed", function() {
  //   expect(new Playlist("    ")).toThrow();
  // });

  it("should have tracks empty array on creation", function() {
    const myPlaylist = new Playlist("oldies blues");
    expect(Array.isArray(myPlaylist.tracks)).toBe(true);
    expect(myPlaylist.tracks.length).toEqual(0);
  });
});