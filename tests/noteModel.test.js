const Note = require("../models/Note");
const mongoose=require('mongoose')

describe("Note Model", () => {
  it("should create a note with required fields", () => {
    const note = new Note({
      user: new mongoose.Types.ObjectId(),
      title: "Sample Title",
      content: "Sample content",
    });
    expect(note.title).toBe("Sample Title");
    expect(note.content).toBe("Sample content");
  });

  it("should throw validation error without title or content", async () => {
    const note = new Note({ user: new mongoose.Types.ObjectId() });
    let err;
    try {
      await note.validate();
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.title).toBeDefined();
    expect(err.errors.content).toBeDefined();
  });
});
