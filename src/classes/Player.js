class Player
{
    /**
     * How many credits the player currently has
     * @type {number}
     */
    credits = 0;

    /**
     * What turn the player is currently on
     * @type {number}
     */
    currentTurn = 0;

    /**
     * Array of all colonies belonging to this player
     * @type {[Colony]}
     */
    colonies= [];

    /**
     * Array of all units belonging to this player
     * @type {[Unit]}
     */
    units = [];

    /**
     * The player's inspector
     * @type {Inspector|null}
     */
    inspector = null;

    /**
     * Array of all nodes currently visible to the player
     * @type {[Node]}
     */
    visibleNodes = [];

    /**
     * Creates a new instance of a player. Abstract class throws an error if
     * called directly. Create an extended player type instead.
     */
    constructor()
    {
        if (this.constructor === Player)
        {
            throw new Error("Can't instantiate an abstract Player!");
        }

        this.inspector = new Inspector();
    }

    /**
     * Called to start this player's turn
     */
    startTurn()
    {
        //TODO: Play sound
        for (let unit of this.units)
        {
            unit.hasMovedThisTurn = false;
            if (unit instanceof Worker)
            {
                if (unit.node)
                {
                    if (unit.node.type === Node.Type.ASTEROIDS)
                    {
                        this.credits += unit.node.creditsPerTurn;
                    }
                }
            }
        }

        for (let colony of this.colonies)
        {
            this.credits += colony.creditsPerTurn;
            colony.startTurn();
        }
    }

    endTurn()
    {

    }
}