/**
 * Game Class: Game controller singleton used for tracking game state
 */
class Game
{
    hasBegun = false;
    turn = 0;
    players = [];

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

    /**
     * Adds a player to the game.
     * NOTE: Cannot be run if the game has already begun. Must be done before begin()
     * @see begin
     */
    addPlayer()
    {
    }

    /**
     * Starts the game proper
     */
    begin()
    {
        this.players[0].startTurn();
    }
}