let input = null;
let testP = null;

function tick()
{
    // TODO: Only needed for Chrome? Needs to be verified.
    //input.pollGamepads();

    input.getInput();
    if (input.gamepad)
    {
        testP.innerHTML = `
            Controller ID: ${input.gamepad.id}
            <br>
            Up: ${input.up}
            <br>
            Down: ${input.down}
            <br>
            Left: ${input.left}
            <br>
            Right: ${input.right}
            <br>
            Confirm: ${input.confirm}
            <br>
            Cancel: ${input.cancel}
        `;
    }
    else
    {
        testP.innerHTML = "No Gamepad Detected...";
    }
    window.requestAnimationFrame(tick);
}

function main()
{
    testP = document.getElementById("testP");
    input = new Input();

    window.requestAnimationFrame(tick);
}

main();