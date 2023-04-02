class Worker extends Unit
{
    /**
     * Creates a new instance of a Worker
     * @param player Player this unit belongs to
     * @param movementRange Distance this unit can move during a turn
     * @param scanRange Scan range for inspecting nodes/units
     * @param hitPoints Unit hit points
     */
    constructor(player, movementRange, scanRange, hitPoints)
    {
        super(player, movementRange, scanRange, hitPoints);
    }
}