/**
 * Audio Class: Audio controller singleton used for controlling audio playback
 */
class Audio
{
    /**
     * Music volume (decimal value 0-1)
     * @type {number}
     */
    MUSIC_VOLUME = 0.3;

    /**
     * Array of all songs in the game
     * @type {[Sound]}
     */
    songs = [];

    /**
     * Current song being played
     * @type {Sound|null}
     */
    currentSong = null;

    /**
     * Current song index
     * @type {number}
     */
    currentSongIndex = 0;

    sfx = {};
    narrations = {};
    currentNarration = null;

    /**
     * Singleton instance of the Audio class
     * @type {Audio|null}
     */
    static #instance = null;

    /**
     * Constructor. Warns if instance is already created.
     * @returns {Audio}
     */
    constructor()
    {
        if (Audio.#instance)
        {
            console.warn("Audio instance already created!");
            return Audio.#instance;
        }

        let songs = document.getElementsByClassName("musicFile");
        for (let songAudioElement of songs)
        {
            this.addSong(songAudioElement);
        }
    }

    /**
     * Creates (if necessary) and returns the singleton instance of the Audio class
     * @returns {Audio|null} Audio singleton instance
     */
    static getInstance()
    {
        if (Audio.#instance === null)
        {
            Audio.#instance = new Audio();
        }

        return Audio.#instance;
    }

    /**
     * Adds a new song to the Audio Manager with the provided element
     * @param element DOM element of the song to add
     */
    addSong(element)
    {
        this.songs.push(new Sound(Sound.Type.MUSIC, element, this.MUSIC_VOLUME));
    }

    addSFX(filename)
    {

    }

    addNarration(filename)
    {

    }

    /**
     * Plays all music files in sequence
     */
    playMusic()
    {
        if (!this.currentSong)
        {
            this.currentSongIndex = 0;
            this.currentSong = this.songs[this.currentSongIndex];
            this.currentSong.element.addEventListener("ended", this.playNextSong.bind(this));
        }

        this.currentSong.play();
    }

    /**
     * Plays the next song in the list of music
     */
    playNextSong()
    {
        this.currentSongIndex ++;
        if (this.currentSongIndex >= this.songs.length)
        {
            this.currentSongIndex = 0;
        }
        this.currentSong = this.songs[this.currentSongIndex];
        this.currentSong.element.addEventListener("ended", this.playNextSong.bind(this));
        this.currentSong.play();
    }

    stopAllSFX()
    {

    }

    stopAllNarration()
    {

    }

    /**
     * Pauses the currently playing music
     */
    pauseMusic()
    {
        if (!this.currentSong) return;

        this.currentSong.pause();
    }
}