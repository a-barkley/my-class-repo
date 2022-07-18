const FileIO = require('../fileIO');

describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      jest.mock('fs')
      const spy = jest.spyOn(fs, 'readFileSync')
    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      jest.mock('fs')
      const spy2 = jest.spyOn(fs, 'writeFileSync')
    });
  });
});
