/**
 * Input Class: Input controller used for tracking state of keyboard/controller
 */
class Input
{
    /**
     * Currently active gamepad (if exists)
     * @type {null}
     */
    gamepad = null;

    //TODO: Add mappings for control schemes
    up = false;
    down = false;
    left = false;
    right = false;
    A = false;
    B = false;
    X = false;
    Y = false;

    /**
     * Singleton instance of the Input class
     * @type {Input|null}
     */
    static #instance = null;

    /**
     * Constructor. Warns if instance is already created.
     */
    constructor()
    {
        if (Input.#instance)
        {
            console.warn("Input instance already created");
            return Input.#instance;
        }

        window.addEventListener("gamepadconnected", this.#gamepadConnected.bind(this));
        window.addEventListener("gamepaddisconnected", this.#gamepadDisconnected.bind(this));
    }

    /**
     * Creates (if necessary) and returns the singleton instance of the Input class
     * @return {Input|null} Input singleton instance
     */
    static getInstance()
    {
        if (Input.#instance === null)
        {
            Input.#instance = new Input();
        }

        return Input.#instance;
    }

    /**
     * Polls gamepads for activation
     */
    pollGamepads()
    {
        return;
        let gamepads = navigator.getGamepads();
        if (gamepads.length > 0 && gamepads[0])
        {
            this.gamepad = gamepads[0];
        }
        else
        {
            this.gamepad = null;
        }
    }

    /**
     * Called to fetch input values from gamepad buttons/axes
     */
    getInput()
    {
        if (!this.gamepad) return;

        this.up = this.gamepad?.buttons[12].pressed;
        this.down = this.gamepad?.buttons[13].pressed;
        this.left = this.gamepad?.buttons[14].pressed;
        this.right = this.gamepad?.buttons[15].pressed;
        this.A = this.gamepad?.buttons[0].pressed;
        this.B = this.gamepad?.buttons[1].pressed;
        this.X = this.gamepad?.buttons[2].pressed;
        this.Y = this.gamepad?.buttons[3].pressed;
    }

    /**
     * Called when a gamepad is connected to the browser
     * @param event Input event
     */
    #gamepadConnected(event)
    {
        this.gamepad = event.gamepad;
    }

    /**
     * Called when a gamepad is disconnected from the browser
     * @param event Input event
     */
    #gamepadDisconnected(event)
    {
        this.gamepad = null;
    }
}