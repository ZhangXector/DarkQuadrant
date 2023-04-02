class Warship extends Unit
{
    /**
     * How many hit points of damage this unit does when attacking
     * @type {number}
     */
    attackPower = 20;

    /**
     * Creates a new instance of a Warship
     * @param player Player this unit belongs to
     * @param movementRange Distance this unit can move during a turn, default 2
     * @param scanRange Scan range for inspecting nodes/units, default 3
     * @param hitPoints Unit hit points, default 200
     * @param attackPower Unit attack power, default 20
     */
    constructor(player, movementRange = 2, scanRange = 3, hitPoints = 200, attackPower = 20)
    {
        super(player, movementRange, scanRange, hitPoints);

        this.attackPower = attackPower;
    }
}