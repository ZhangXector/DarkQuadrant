/**
 * Announcer Class: Controller singleton used for announcing things via the screen reader
 */
class Announcer
{
    /**
     * Amount of time to wait between reading to trick some screen readers into
     * reading repeat announcements
     * @type {number}
     */
    ANNOUNCE_TIMEOUT = 160;

    /**
     * Announcer element
     * @type {Element|null}
     */
    announcerElement = null;

    /**
     * Singleton instance of the Announcer class
     * @type {Announcer|null}
     */
    static #instance = null;

    /**
     * Constructor. Warns if instance is already created.
     * @returns {Announcer}
     */
    constructor()
    {
        if (Announcer.#instance)
        {
            console.warn("Audio instance already created!");
            return Announcer.#instance;
        }

        this.announcerElement = document.getElementById("screenReaderOnly");
    }

    /**
     * Creates (if necessary) and returns the singleton instance of the
     * Announcer class
     * @returns {Announcer|null} Announcer singleton instance
     */
    static getInstance()
    {
        if (Announcer.#instance === null)
        {
            Announcer.#instance = new Announcer();
        }

        return Announcer.#instance;
    }

    /**
     * Call to announce the provided text to the screen reader
     * @param text Text to announce
     */
    announce(text)
    {
        if (!this.announcerElement)
        {
            console.error("Unable to locate screen reader announcement element!");
            return;
        }

        this.announcerElement.innerHTML = "";
        this.announcerElement.setAttribute("aria-label", "");

        setTimeout(function()
        {
            this.announcerElement.innerHTML = text;
            this.announcerElement.setAttribute("aria-label", text);
        }.bind(this));
    }
}