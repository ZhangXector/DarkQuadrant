class Scout extends Unit
{
    /**
     * How many hit points of damage this unit does when attacking
     * @type {number}
     */
    attackPower = 0;

    /**
     * Creates a new instance of a Warship
     * @param player Player this unit belongs to
     * @param movementRange Distance this unit can move during a turn
     * @param scanRange Scan range for inspecting nodes/units
     * @param hitPoints Unit hit points
     * @param attackPower Unit attack power
     */
    constructor(player, movementRange, scanRange, hitPoints, attackPower)
    {
        super(player, movementRange, scanRange, hitPoints);

        this.attackPower = attackPower;
    }
}