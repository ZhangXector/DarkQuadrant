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
     * Neighbor Node to the north
     * @type {Node|null}
     */
    nodeNorth = null;

    /**
     * Neighbor Node to the south
     * @type {Node|null}
     */
    nodeSouth = null;

    /**
     * Neighbor Node to the west
     * @type {Node|null}
     */
    nodeWest = null;

    /**
     * Neighbor Node to the east
     * @type {Node|null}
     */
    nodeEast = null;

    /**
     * How many credits per turn this node provides if controlled
     * @type {number}
     */
    creditsPerTurn = 0;

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
}