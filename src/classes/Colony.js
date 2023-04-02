/**
 * Colony Class: Models a colony with all of its functionality and properties
 */
class Colony
{
    /**
     * How many points of damage this colony can take before destruction
     * @type {number}
     */
    totalHitPoints = 0;

    /**
     * How many hit points this colony currently has
     * @type {number}
     */
    currentHitPoints = 0;

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
     * @type {null}
     */
    currentlyBuilding = null;

    /**
     * Creates a new instance of a colony
     * @param player Player this colony belongs to
     * @param node Node this colony occupies
     * @param hitPoints Colony hit points, default 500
     */
    constructor(player, node, hitPoints = 500)
    {
        if (!player || !node || hitPoints <= 0)
        {
            throw new Error("Missing required parameters to create colony");
        }

        this.player = player;
        this.player.colonies.push(this);
        this.node = node;
        this.node.colony = this;
        this.totalHitPoints = hitPoints;
        this.currentHitPoints = hitPoints;

        // TODO: begin building a scout
    }

    /**
     * Called on the start of the turn to check what is currently building
     */
    startTurn()
    {
        this.turnsToNextBuild -= 1;

        if (this.turnsToNextBuild <= 0)
        {
            // TODO Spawn built unit
            /*
            let newUnit = new ??
            this.player.units.push(newUnit);
            */
        }
    }

    /**
     * Begin building a unit type (refunds a portion of unfinished units)
     * @param unitType The type of unit class to build
     */
    beginBuilding(unitType)
    {
        this.currentlyBuilding = unitType;
        this.turnsToNextBuild = unitType.turnsToBuild;
    }

    /**
     * Called by the attacker to damage this colony by the provided attack power
     * @param {number} attackerPower Attacker attack power
     */
    damage(attackerPower)
    {
        if (attackerPower <= 0) return;

        this.currentHitPoints -= attackerPower;
        //TODO: Play sound

        if (this.currentHitPoints <= 0)
        {
            this.destroy();
        }
    }

    /**
     * Call to destroy this colony
     */
    destroy()
    {
        if (this.node)
        {
            this.node.colony = null;
        }
        this.player.colonies.filter(colony => colony !== this);
        //TODO: Play sound
    }
}