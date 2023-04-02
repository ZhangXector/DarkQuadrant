let testP = null;
let game = null;
let audio = null;
let input = null;
let map = null;

function tick()
{
    //TODO: Only needed for Chrome? Needs to be verified.
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

    // Game Controller Init
    game = Game.getInstance();
    game.addPlayer(new Human());
    game.addPlayer(new AI());

    // Audio Controller Init
    audio = Audio.getInstance();
    //audio.playMusic();

    // Input Controller Init
    input = new Input();

    // Map Controller Init
    map = Map.getInstance();
    map.generate("AccessibleGamesRock");

    // Debug Init
    testP = document.getElementById("testP");
    testP.innerHTML = map.testDrawGrid();
    setCellValue(4, 18, "!");

    // Begin Tick
    //window.requestAnimationFrame(tick);
}

main();