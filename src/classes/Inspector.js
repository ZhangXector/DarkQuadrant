class Inspector
{
    static INSPECT_TIME_DELAY = 3;

    /**
     * The current node the inspector is on
     * @type {Node|null}
     */
    currentNode = null;

    /**
     * Input singleton instance
     * @type {Input|null}
     */
    input = null;

    /**
     * Whether the inspector is currently inspecting a node
     * @type {boolean}
     */
    currentlyInspecting = false;

    constructor()
    {
        this.input = Input.getInstance();
    }

    moveToCoords(x, y)
    {

    }

    moveToNode(node)
    {
        this.currentNode = node;
    }

    /**
     * Called to check for input
     */
    tick()
    {
        if (this.input.Y && !this.currentlyInspecting)
        {
            this.inspectNode();
            setTimeout(this.finishInspection.bind(this), Inspector.INSPECT_TIME_DELAY * 1000);
        }
    }

    finishInspection()
    {
        this.currentlyInspecting = false;
    }

    inspectNode()
    {
        this.currentlyInspecting = true;
        console.log(this.currentNode);
    }
}