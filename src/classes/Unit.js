/**
 * Unit Class: Abstract class acting as a base class for all ship units
 */
class Unit
{
    /**
     * How many nodes this unit can move within a turn
     * @type {number}
     */
    movementRange = 0;

    /**
     * Whether this unit has moved this turn already
     * @type {boolean}
     */
    hasMovedThisTurn = false;

    /**
     * The distance around this unit scanners can detect units/nodes
     * @type {number}
     */
    scanRange = 0;

    /**
     * How many points of damage this unit can take before destruction
     * @type {number}
     */
    hitPoints = 0;

    /**
     * How many turns it takes to build this unit at a colony
     * @type {number}
     */
    turnsToBuild = 0;

    /**
     * The player this unit belongs to
     * @type {Player|null}
     */
    player = null;

    /**
     * The node this unit is currently occupying (if any)
     * @type {Node|null}
     */
    node = null;

    /**
     * Creates a new instance of a unit. Abstract class throws an error if
     * called directly. Create an extended unit type instead.
     * @param player Player this unit belongs to
     * @param movementRange Distance this unit can move during a turn
     * @param scanRange Scan range for inspecting nodes/units
     * @param hitPoints Unit hit points
     * @param turnsToBuild Turns to build this unit
     */
    constructor(player, movementRange, scanRange, hitPoints, turnsToBuild)
    {
        if (this.constructor === Unit)
        {
            throw new Error("Can't instantiate an abstract Unit!");
        }

        this.movementRange = movementRange;
        this.scanRange = scanRange;
        this.hitPoints = hitPoints;
        this.turnsToBuild = turnsToBuild;
        player.units.push(this);
    }

    /**
     * Sets the node the unit is currently occupying
     * @param {Node} node
     */
    setNode(node)
    {
        if (!node) return;

        this.node = node;
    }

    /**
     * Moves this unit to the provided node and marks it as having moved
     * @param node Node to move the unit to
     */
    move(node)
    {
        if (!node) return;

        this.setNode(node);

        this.hasMovedThisTurn = true;

        //TODO: Play sound
    }

    /**
     * Called by the attacker to damage this unit by the provided attack power
     * @param {number} attackerPower Attacker attack power
     */
    damage(attackerPower)
    {
        if (attackerPower <= 0) return;

        this.hitPoints -= attackerPower;
        //TODO: Play sound

        if (this.hitPoints <= 0)
        {
            this.#destroy();
        }
    }

    /**
     * Call to destroy this unit
     */
    #destroy()
    {
        if (this.node)
        {
            this.node.unit = null;
        }
        this.player.units.filter(unit => unit !== this);
        //TODO: Play sound
    }
}