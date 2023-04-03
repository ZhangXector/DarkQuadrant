/**
 * Game Class: Game controller singleton used for tracking game state
 */
class Game
{
    /**
     * Whether the current game is already in play
     * @type {boolean}
     */
    hasBegun = false;

    /**
     * What turn number the game is on
     * @type {number}
     */
    turn = 0;

    /**
     * An array of all players in the game
     * @type {[Player]}
     */
    players = [];

    /**
     * The index of the current player in the players array
     * @type {number}
     * @see players
     */
    currentPlayer = 0;

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
     * Used to save the game to the local storage
     */
    save()
    {

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
     * @param {Player} player New player to add
     */
    addPlayer(player)
    {
        this.players.push(player);
    }

    /**
     * Starts the game proper (sets up player positions and starts player turns)
     */
    begin()
    {
        // Create starting colony and ship for all players
        let map = Map.getInstance();
        let planets = [];
        for (let nodeColumns of map.grid)
        {
            for (let node of nodeColumns)
            {
                if (node.type === Node.Type.PLANET)
                {
                    planets.push(node);
                }
            }
        }

        let rand = new Math.seedrandom("testSeed");
        for (let player of this.players)
        {
            let choice = Math.floor(rand() * planets.length);
            let node = planets[choice];
            node.addColony(new Colony(player, node));
            let scout = new Scout(player);
            scout.move(node);
            if (player instanceof Human)
            {
                player.inspector.moveToNode(node);
            }
        }

        // Begin player turns
        this.hasBegun = true;
        this.players[0].startTurn();
    }

    /**
     * Called to start the next player's turn
     */
    nextPlayerTurn()
    {
        this.currentPlayer ++;
        if (this.currentPlayer > this.players.length)
        {
            this.currentPlayer = 0;
        }
        this.players[this.currentPlayer].startTurn();
    }
}