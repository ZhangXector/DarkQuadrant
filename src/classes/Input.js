class Input
{
    gamepad = null;

    // TODO: Add mappings for control schemes
    up = false;
    down = false;
    left = false;
    right = false;
    confirm = false;
    cancel = false;

    /**
     * Initializes game input devices
     */
    constructor()
    {
        window.addEventListener("gamepadconnected", this.#gamepadConnected.bind(this));
        window.addEventListener("gamepaddisconnected", this.#gamepadDisconnected.bind(this));
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
        this.confirm = this.gamepad?.buttons[0].pressed;
        this.cancel = this.gamepad?.buttons[1].pressed;
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