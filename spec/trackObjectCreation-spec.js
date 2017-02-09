const Track = require("../music-library").Track;

describe("creating a Track object", function() {
  it("should have the title, rating and length passed to constructor", function() {
    const myTrack = new Track("Slicker Than Your Average", 5, 246);
    expect(myTrack.title).toEqual("Slicker Than Your Average");
    expect(myTrack.rating).toEqual(5);
    expect(myTrack.length).toEqual(246);
  });

  // it("should throw if no title, rating or length is passed", function() {
  //   expect(new Track(undefined, 5, 246)).toThrow();
  //   expect(new Track("Slicker Than Your Average", undefined, 246)).toThrow("Title, Rating and Length of track must be supplied");
  //   expect(new Track("Slicker Than Your Average", 5)).toThrow("Title, Rating and Length of track must be supplied");
  //   expect(new Track()).toThrow("Title, Rating and Length of track must be supplied");
  // });

  // it("should only accept string as title", function() {
  //   expect(new Track(['name'], 4, 250)).toThrowError(TypeError);
  // });

  // it("should only accept integer between 1 - 5 as rating", function() {
  //   expect(new Track("The Greatest", 0, 250)).toThrow("Track rating must be in the range 1-5 inclusive and Track length (duration) must be greater than 0");
  // });

  // it("should only accept integer between 1 - 5 as rating", function() {
  //   expect(new Track("The Greatest", 6, 250)).toThrow("Track rating must be in the range 1-5 inclusive and Track length (duration) must be greater than 0");
  // });

  // it("should only accept integer as rating", function() {
  //   expect(new Track("The Greatest", 0.5, 250)).toThrowError(TypeError);
  // });

  // it("should only accept integer as length", function() {
  //   expect(new Track("The Greatest", 3, 250.5)).toThrow();
  // });

  // it("should only accept length greater than 0", function() {
  //   expect(new Track("The Greatest", 3, 0)).toThrow("Track rating must be in the range 1-5 inclusive and Track length (duration) must be greater than 0");
  // });

  // it("should throw error when white space is passed as title", function() {
  //   expect(new Track("    ", 4, 200)).toThrow();
  // });
});