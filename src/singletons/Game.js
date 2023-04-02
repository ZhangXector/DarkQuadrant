/**
 * Game Class: Game controller singleton used for tracking game state
 */
class Game
{
    credits = 0;
    turn = 1;

    /**
     * Singleton instance of the Game class
     * @type {Game|null}
     */
    static #instance = null;

    /**
     * Constructor. Warns if instance is already created.
     */
    constructor()
    {
        if (Game.#instance)
        {
            console.warn("Game instance already created!");
            return Game.#instance;
        }
    }

    /**
     * Creates (if necessary) and returns the singleton instance of the Game class
     * @returns {Game|null} Game singleton instance
     */
    static getInstance()
    {
        if (Game.#instance === null)
        {
            Game.#instance = new Game();
        }

        return Game.#instance;
    }

    /**
     * Used to export a game save file
     */
    export()
    {

    }

    /**
     * Used to import a game save file
     */
    import()
    {

    }
}