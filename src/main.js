let testP = null;
let game = null;
let audio = null;
let input = null;
let map = null;

function tick()
{
    //TODO: Only needed for Chrome? Needs to be verified.
    //input.pollGamepads();

    input.tick();
    testP.innerHTML = `
        Controller ID: ${input.gamepad?.id}
        <br>
        Controller Mapping: ${input.gamepad?.mapping}
        <br>
        Confirm: ${input.confirm}
        <br>
        Cancel: ${input.cancel}
        <br>
        Inspect: ${input.inspect}
        <br>
        Menu: ${input.menu}
        <br>
        Up: ${input.up}
        <br>
        Down: ${input.down}
        <br>
        Left: ${input.left}
        <br>
        Right: ${input.right}
        <br>
        1: ${input.hotkey1}
        <br>
        2: ${input.hotkey2}
        <br>
        3: ${input.hotkey3}
        <br>
        4: ${input.hotkey4}
        <br>
        5: ${input.hotkey5}
        <br>
        6: ${input.hotkey6}
        <br>
        7: ${input.hotkey7}
        <br>
        8: ${input.hotkey8}
    `;

    if (game.players[game.currentPlayer] instanceof Human)
    {
        game.players[game.currentPlayer].tick();
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
    input = Input.getInstance();

    // Map Controller Init
    map = Map.getInstance();
    map.generate("AccessibleGamesRock");

    // Debug Init
    testP = document.getElementById("testP");
    //testP.innerHTML = map.testDrawGrid();
    //setCellValue(4, 18, "!");

    // Begin Game
    game.begin();
    window.requestAnimationFrame(tick);
}

main();