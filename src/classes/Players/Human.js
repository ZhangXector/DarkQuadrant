class Human extends Player
{
    constructor()
    {
        super();

        this.inspector = new Inspector();
    }

    tick()
    {
        super.tick();

        this.inspector.tick();
    }
}