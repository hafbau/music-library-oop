const MusicLibrary = require("../music-library")
const Playlist = MusicLibrary.Playlist;
const Track = MusicLibrary.Track;

const myPlaylist = new Playlist("2Pac 90s");

describe("addTrack method in a Playlist instance", function() {
  it("should be a function", function() {
    expect(typeof myPlaylist.addTrack).toBe("function");
  });

  // it("should only accept Track object", function() {
  //   expect(myPlaylist.addTrack("not a Track")).toThrowError(TypeError);
  //   expect(myPlaylist.addTrack(1)).toThrowError(TypeError);
  //   expect(myPlaylist.addTrack(new Playlist("not a track"))).toThrowError(TypeError);
  //   expect(myPlaylist.addTrack({track: "not a Track"})).toThrowError(TypeError);
  // });

  it("should add to the Playlist's instance Tracks", function() {
    myPlaylist.addTrack(new Track("Hit 'em up", 4, 256));
    myPlaylist.addTrack(new Track("Dear Mama", 5, 238));
    myPlaylist.addTrack(new Track("How do you want it", 4, 220));
    expect(myPlaylist.tracks.length).toEqual(3);
  });
});

describe("overallRating in a Playlist instance", function() {
  it("should be a function", function() {
    expect(typeof myPlaylist.overallRating).toBe("function");
  });

  it("should average the rating of its tracks", function() {
    expect(myPlaylist.overallRating()).toEqual(4.3);
  });
});

describe("totalDuration in a Playlist instance", function() {
  it("should be a function", function() {
    expect(typeof myPlaylist.totalDuration).toBe("function");
  });

  it("should sum the duration of its tracks", function() {
    expect(myPlaylist.totalDuration()).toEqual(714);
  });
});