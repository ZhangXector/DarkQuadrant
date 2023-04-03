/**
 * Input Class: Input controller used for tracking state of keyboard/controller
 */
class Input
{
    /**
     * The value the axis needs to be over to be considered "active"
     * @type {number}
     */
    AXIS_THRESHOLD = 0.5;

    /**
     * Currently active gamepad (if exists)
     * @type {Gamepad|null}
     */
    gamepad = null;

    // Gamepad Mappings
    #g_b0  = false;
    #g_b1 = false;
    #g_b2 = false;
    #g_b3 = false;
    #g_lbumper = false;
    #g_rbumper = false;
    #g_ltrigger = false;
    #g_rtrigger = false;
    #g_select = false;
    #g_start = false;
    #g_lstick = false;
    #g_rstick = false;
    #g_d_up = false;
    #g_d_down = false;
    #g_d_left = false;
    #g_d_right = false;
    #g_l_up = false;
    #g_l_down = false;
    #g_l_left = false;
    #g_l_right = false;
    #g_r_up = false;
    #g_r_down = false;
    #g_r_left = false;
    #g_r_right = false;

    // Keyboard mappings
    #k_space = false;
    #k_esc = false;
    #k_e = false;
    #k_q = false;
    #k_f = false;
    #k_r = false;
    #k_x = false;
    #k_c = false;
    #k_enter = false;
    #k_tab = false;
    #k_z = false;
    #k_v = false;
    #k_up = false;
    #k_down = false;
    #k_left = false;
    #k_right = false;
    #k_1 = false;
    #k_2 = false;
    #k_3 = false;
    #k_4 = false;
    #k_5 = false;
    #k_6 = false;
    #k_7 = false;
    #k_8 = false;

    // Game Mappings
    confirm  = false;
    cancel  = false;
    inspect  = false;
    menu  = false;
    action1  = false;
    action2  = false;
    action3  = false;
    action4  = false;
    optionMenu  = false;
    mainMenu  = false;
    action5  = false;
    action6  = false;
    up  = false;
    down  = false;
    left  = false;
    right  = false;
    hotkey1  = false;
    hotkey2  = false;
    hotkey3  = false;
    hotkey4 = false;
    hotkey5  = false;
    hotkey6  = false;
    hotkey7  = false;
    hotkey8  = false;

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
        window.addEventListener("keydown", this.#keyDown.bind(this));
        window.addEventListener("keyup", this.#keyUp.bind(this));
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
     * Calculate input values
     */
    tick()
    {
        if (this.gamepad)
        {
            this.#g_b0 = this.gamepad.buttons[0].pressed;
            this.#g_b1 = this.gamepad.buttons[1].pressed;
            this.#g_b2 = this.gamepad.buttons[2].pressed;
            this.#g_b3 = this.gamepad.buttons[3].pressed;
            this.#g_lbumper = this.gamepad.buttons[4].pressed;
            this.#g_rbumper = this.gamepad.buttons[5].pressed;
            this.#g_ltrigger = this.gamepad.buttons[6].pressed;
            this.#g_rtrigger = this.gamepad.buttons[7].pressed;
            this.#g_select = this.gamepad.buttons[8].pressed;
            this.#g_start = this.gamepad.buttons[9].pressed;
            this.#g_lstick = this.gamepad.buttons[10].pressed;
            this.#g_rstick = this.gamepad.buttons[11].pressed;
            this.#g_d_up = this.gamepad.buttons[12].pressed;
            this.#g_d_down = this.gamepad.buttons[13].pressed;
            this.#g_d_left = this.gamepad.buttons[14].pressed;
            this.#g_d_right = this.gamepad.buttons[15].pressed;
            this.#g_l_up = this.gamepad.axes[1] < -this.AXIS_THRESHOLD;
            this.#g_l_down = this.gamepad.axes[1] > this.AXIS_THRESHOLD;
            this.#g_l_left = this.gamepad.axes[0] < -this.AXIS_THRESHOLD;
            this.#g_l_right = this.gamepad.axes[0] > this.AXIS_THRESHOLD;
            this.#g_r_up = this.gamepad.axes[3] < -this.AXIS_THRESHOLD;
            this.#g_r_down = this.gamepad.axes[3] > this.AXIS_THRESHOLD;
            this.#g_r_left = this.gamepad.axes[2] < -this.AXIS_THRESHOLD;
            this.#g_r_right = this.gamepad.axes[2] > this.AXIS_THRESHOLD;
        }

        this.confirm = this.#g_b0 || this.#k_space;
        this.cancel = this.#g_b1 || this.#k_esc;
        this.inspect = this.#g_b2 || this.#k_e;
        this.menu = this.#g_b3 || this.#k_q;
        this.action1 = this.#g_lbumper || this.#k_f;
        this.action2 = this.#g_rbumper || this.#k_r;
        this.action3 = this.#g_ltrigger || this.#k_x;
        this.action4 = this.#g_rtrigger || this.#k_c;
        this.optionMenu = this.#g_select || this.#k_enter;
        this.mainMenu = this.#g_start || this.#k_tab;
        this.action5 = this.#g_lstick || this.#k_z;
        this.action6 = this.#g_rstick || this.#k_v;
        this.up = this.#g_d_up || this.#g_l_up || this.#k_up;
        this.down = this.#g_d_down || this.#g_l_down || this.#k_down;
        this.left = this.#g_d_left || this.#g_l_left || this.#k_left;
        this.right = this.#g_d_right || this.#g_l_right || this.#k_right;
        this.hotkey1 = (this.#g_r_up && !this.#g_r_right && !this.#g_r_left) || this.#k_1;
        this.hotkey2 = (this.#g_r_up && this.#g_r_right) || this.#k_2;
        this.hotkey3 = (this.#g_r_right && !this.#g_r_up && !this.#g_r_down) || this.#k_3;
        this.hotkey4 = (this.#g_r_right && this.#g_r_down) || this.#k_4;
        this.hotkey5 = (this.#g_r_down && !this.#g_r_left && !this.#g_r_right) || this.#k_5;
        this.hotkey6 = (this.#g_r_down && this.#g_r_left) || this.#k_6;
        this.hotkey7 = (this.#g_r_left && !this.#g_r_up && !this.#g_r_down) || this.#k_7;
        this.hotkey8 = (this.#g_r_left && this.#g_r_up) || this.#k_8;
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

    /**
     *  Called when a key on the keyboard is pressed
     * @param event Input event
     */
    #keyDown(event)
    {
        switch (event.code)
        {
            case "Space":
                this.#k_space = true;
                break;
            case "Escape":
                this.#k_esc = true;
                break;
            case "KeyE":
                this.#k_e = true;
                break;
            case "KeyQ":
                this.#k_q = true;
                break;
            case "KeyF":
                this.#k_f = true;
                break;
            case "KeyR":
                this.#k_r = true;
                break;
            case "KeyX":
                this.#k_x = true;
                break;
            case "KeyC":
                this.#k_c = true;
                break;
            case "Enter":
                this.#k_enter = true;
                break;
            case "Tab":
                this.#k_tab = true;
                break;
            case "KeyZ":
                this.#k_z = true;
                break;
            case "KeyV":
                this.#k_v = true;
                break;
            case "KeyS":
            case "ArrowDown":
                this.#k_down = true;
                break;
            case "KeyW":
            case "ArrowUp":
                this.#k_up = true;
                break;
            case "KeyA":
            case "ArrowLeft":
                this.#k_left = true;
                break;
            case "KeyD":
            case "ArrowRight":
                this.#k_right = true;
                break;
            case "Digit1":
            case "Numpad1":
                this.#k_1 = true;
                break;
            case "Digit2":
            case "Numpad2":
                this.#k_2 = true;
                break;
            case "Digit3":
            case "Numpad3":
                this.#k_3 = true;
                break;
            case "Digit4":
            case "Numpad4":
                this.#k_4 = true;
                break;
            case "Digit5":
            case "Numpad5":
                this.#k_5 = true;
                break;
            case "Digit6":
            case "Numpad6":
                this.#k_6 = true;
                break;
            case "Digit7":
            case "Numpad7":
                this.#k_7 = true;
                break;
            case "Digit8":
            case "Numpad8":
                this.#k_8 = true;
                break;
        }
    }

    /**
     * Called when a key on the keyboard is released
     * @param event
     */
    #keyUp(event)
    {
        switch (event.code)
        {
            case "Space":
                this.#k_space = false;
                break;
            case "Escape":
                this.#k_esc = false;
                break;
            case "KeyE":
                this.#k_e = false;
                break;
            case "KeyQ":
                this.#k_q = false;
                break;
            case "KeyF":
                this.#k_f = false;
                break;
            case "KeyR":
                this.#k_r = false;
                break;
            case "KeyX":
                this.#k_x = false;
                break;
            case "KeyC":
                this.#k_c = false;
                break;
            case "Enter":
                this.#k_enter = false;
                break;
            case "Tab":
                this.#k_tab = false;
                break;
            case "KeyZ":
                this.#k_z = false;
                break;
            case "KeyV":
                this.#k_v = false;
                break;
            case "KeyS":
            case "ArrowDown":
                this.#k_down = false;
                break;
            case "KeyW":
            case "ArrowUp":
                this.#k_up = false;
                break;
            case "KeyA":
            case "ArrowLeft":
                this.#k_left = false;
                break;
            case "KeyD":
            case "ArrowRight":
                this.#k_right = false;
                break;
            case "Digit1":
            case "Numpad1":
                this.#k_1 = false;
                break;
            case "Digit2":
            case "Numpad2":
                this.#k_2 = false;
                break;
            case "Digit3":
            case "Numpad3":
                this.#k_3 = false;
                break;
            case "Digit4":
            case "Numpad4":
                this.#k_4 = false;
                break;
            case "Digit5":
            case "Numpad5":
                this.#k_5 = false;
                break;
            case "Digit6":
            case "Numpad6":
                this.#k_6 = false;
                break;
            case "Digit7":
            case "Numpad7":
                this.#k_7 = false;
                break;
            case "Digit8":
            case "Numpad8":
                this.#k_8 = false;
                break;
        }
    }
}