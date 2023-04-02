/**
 * Node Class: Represents a node/tile on the game map
 */
class Node
{
    /**
     * Node type, one of EMPTY, ASTEROIDS, PLANET
     * @type {{PLANET: string, ASTEROIDS: string, EMPTY: string}}
     */
    static Type =
    {
        EMPTY: "Empty Space",
        ASTEROIDS: "Asteroid Field",
        PLANET: "Planet"
    };

    /**
     * What type is this Node
     * @type {Node.Type}
     */
    type = Node.Type.EMPTY;

    /**
     * Node x (west-east) position
     * @type {number}
     */
    x = 0;

    /**
     * Node y (north-south) position
     * @type {number}
     */
    y = 0;

    /**
     * How many credits per turn this node provides if controlled
     * @type {number}
     */
    creditsPerTurn = 0;

    /**
     * Currently occupying unit (if any)
     * @type {Unit|null}
     */
    unit = null;

    /**
     * Currently occupying colony (if any)
     * @type {Colony|null}
     */
    colony = null;

    /**
     * Creates a new instance of Node class
     * @param {Node.Type} type The type of this node
     * @param x Node X (west-east) position
     * @param y Node Y (north-south) position
     * @param creditsPerTurn How many credits per turn this node provides
     * Default is 0
     */
    constructor(type, x, y, creditsPerTurn = 0)
    {
        this.type = type;
        this.x = x;
        this.y = y;
        if (this.type === Node.Type.EMPTY && creditsPerTurn > 0)
        {
            throw "Empty space cannot have a credit value!";
        }
        this.creditsPerTurn = creditsPerTurn;
    }

    /**
     * Add a colony to this node
     * @param {Colony} colony Colony instance
     * @param {Worker} workerShip Worker ship, if any (will be consumed)
     */
    addColony(colony, workerShip = null)
    {
        if (!colony)
        {
            throw new Error("Missing colony to add to node: " + this.x + ", " + this.y);
        }

        this.colony = colony;
        if (workerShip)
        {
            workerShip.destroy();
        }
    }
}