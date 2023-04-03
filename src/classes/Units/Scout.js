class Scout extends Unit
{
    /**
     * How many hit points of damage this unit does when attacking
     * @type {number}
     */
    attackPower = 10;

    /**
     * Creates a new instance of a Warship
     * @param player Player this unit belongs to
     * @param movementRange Distance this unit can move during a turn, default 4
     * @param scanRange Scan range for inspecting nodes/units, default 4
     * @param hitPoints Unit hit points, default 100
     * @param attackPower Unit attack power, default 10
     */
    constructor(
        player,
        movementRange = 4,
        scanRange = 4,
        hitPoints = 100,
        attackPower = 10
    )
    {
        super(player, movementRange, scanRange, hitPoints);

        this.attackPower = attackPower;
    }
}