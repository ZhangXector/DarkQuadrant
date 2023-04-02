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
}