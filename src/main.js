let testP = null;
let audio = null;
let input = null;
let map = null;

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
    // Initialization
    testP = document.getElementById("testP");
    audio = Audio.getInstance();
    //audio.playMusic();
    input = new Input();
    map = Map.getInstance();
    map.generate("AccessibleGamesRock");
    testP.innerHTML = map.testDrawGrid();

    // Begin Tick
    //window.requestAnimationFrame(tick);
}

main();