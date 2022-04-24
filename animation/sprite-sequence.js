class SpriteSequence {
    constructor(
        name,
        frames,
        repeats
    ) {
        this.name = name;
        this.frames = frames;
        this.repeats = !!repeats;
    }
}