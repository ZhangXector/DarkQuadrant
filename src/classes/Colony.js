/**
 * Colony Class: Models a colony with all of its functionality and properties
 */
class Colony
{
    /**
     * How many points of damage this colony can take before destruction
     * @type {number}
     */
    hitPoints = 0;

    /**
     * The player this colony belongs to
     * @type {Player|null}
     */
    player = null;

    /**
     * The node this colony currently occupies
     * @type {Node}
     */
    node = null;

    /**
     * The distance around this colony scanners can detect units
     * @type {number}
     */
    scanRange = 0;

    /**
     * How many credits per turn this node provides if controlled
     * @type {number}
     */
    creditsPerTurn = 0;

    /**
     * How many turns until the next unit is built
     * @type {number}
     */
    turnsToNextBuild = 0;

    /**
     * What unit type this colony is currently building (if any)
     * @type {Unit|null}
     */
    currentlyBuilding = null;

    /**
     * Creates a new instance of a colony
     * @param player Player this colony belongs to
     * @param node Node this colony occupies
     * @param hitPoints Colony hit points
     */
    constructor(player, node, hitPoints)
    {
        if (!player || !node || hitPoints <= 0)
        {
            throw new Error("Missing required parameters to create colony");
        }

        this.player = player;
        this.node = node;
        this.node.colony = this;
        this.hitPoints = hitPoints;
    }

    /**
     * Called on the start of the turn to check what is currently building
     */
    startTurn()
    {
        this.turnsToNextBuild -= 1;

        if (this.turnsToNextBuild <= 0)
        {
            let newUnit = new this.currentlyBuilding()
        }
    }

    /**
     * Begin building a unit type (refunds a portion of unfinished units)
     * @param {Unit} unitType The type of unit class to build
     */
    beginBuilding(unitType)
    {
        this.currentlyBuilding = unitType
    }
}