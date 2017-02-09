const Library = require("../music-library").Library;

describe("creating a library object", function() {
  it("should have the name and creator passed to constructor", function() {
    const myLib = new Library("myRaps", "hafiz");
    expect(myLib.name).toEqual("myRaps");
    expect(myLib.creator).toEqual("hafiz");
  });

  // it("should throw when no name or creator is passed", function() {
  //   expect(new Library()).toThrow();
  //   expect(new Library(undefined, "hafiz")).toThrowError();
  //   expect(new Library("myBlues")).toThrowError(TypeError);
  // });

  // it("should only accept string as name and creator", function() {
  //   expect(new Library(['name'], 42)).toThrowError(TypeError);
  // });

  // it("should throw error when white space is passed", function() {
  //   expect(new Library(" ", "    ")).toThrowError(TypeError);
  // });

  it("should have playlists empty array on creation", function() {
    const myLib = new Library("myRaps", "hafiz");
    expect(Array.isArray(myLib.playlists)).toBe(true);
    expect(myLib.playlists.length).toEqual(0);
  });
});