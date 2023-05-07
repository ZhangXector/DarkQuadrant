/**
 * Blind-accessible HTML/Javascript game template, originally developed and maintained by Themis Games.
 * For more information, see https://github.com/nightblade9/themis-games-template
 */
class ThemisGamesTemplate
{
    /**
     * Scales the game container div to the correct ratio based on authored size
     */
    static scaleGameContainer()
    {
        let authoredWidth = 1920.0; //dimensions of #gameContainer
        let authoredHeight = 1080.0; //dimensions of #gameContainer
        let maxSize = 1;
        let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let screenScale = Math.min(w / authoredWidth, h / authoredHeight);
        let gameContainer = document.getElementById('gameContainer');
        if (gameContainer != null)
        {
            gameContainer.style.transform = 'scale(' + (screenScale * maxSize) + ')';
        }
    }
}