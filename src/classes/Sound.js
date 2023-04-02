/**
 * Sound Class: Represents a sound within the game, be it music, narration, or SFX
 */
class Sound
{
    /**
     * Sound type, one of MUSIC, SFX, NARRATION
     * @type {{MUSIC: string, SFX: string, NARRATION: string}}
     */
    static Type =
    {
        MUSIC: "Music",
        SFX: "Sound Effect",
        NARRATION: "Narration"
    };

    /**
     * What type is this sound
     * @type {Sound.Type}
     */
    type = Sound.Type.SFX;

    /**
     * Filename of the sound (including file extension)
     * @type {string}
     */
    filename = "";

    /**
     * DOM element for this sound
     * @type {Element|null}
     */
    element = null;

    /**
     * Volume of this sound (decimal 0-1)
     * @type {number}
     */
    volume = 0;

    /**
     * Creates a new instance of Sound class
     * @param {Sound.type} type The type of this sound
     * @param {Element} element The DOM element of the sound
     * @param {number} volume The volume of the sound (decimal 0-1). Default 1.
     */
    constructor(type, element, volume = 1)
    {
        this.type = type;
        this.element = element;
        this.filename = element.src;
        this.volume = volume;
    }

    /**
     * Begin playing this sound
     */
    play()
    {
        this.element.volume = this.volume;
        this.element.play();
    }

    /**
     * Pause this sound
     */
    pause()
    {
        this.element.pause();
    }

    /**
     * Stop playing this sound
     */
    stop()
    {
        this.element.stop();
    }
}