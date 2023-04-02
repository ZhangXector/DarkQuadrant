/**
 * Map Class: Map controller singleton used for storing and manipulating the grid
 */
class Map
{
    /**
     * Maximum map size (width and height)
     * @type {{WIDTH: number, HEIGHT: number}}
     */
    MAP_SIZE =
    {
        WIDTH: 35,
        HEIGHT: 25
    };

    /**
     * The probability that each node will be generated 0-1. Must add up to 1!
     * @type {{EMPTY: number, PLANET: number, ASTEROIDS: number}}
     */
    NODE_PROBABILITY =
    {
        EMPTY: 0.944,
        PLANET: 0.006,
        ASTEROIDS: 0.05,
    };

    /**
     * Map grid (2-dimensional array of nodes)
     * @type {[[Node]]}
     */
    grid = [[]];

    /**
     * Current Node
     * @type {Node|null}
     */
    currentNode = null;

    /**
     * Random map generation seed
     * @type {string}
     */
    seed = "";

    /**
     * Singleton instance of the Map class
     * @type {Map|null}
     */
    static #instance = null;

    constructor()
    {
        if (Map.#instance)
        {
            console.warn("Map instance already created!");
            return Map.#instance;
        }
    }

    /**
     * Creates (if necessary) and returns the singleton instance of the Map class
     * @returns {Map|null} Map singleton instance
     */
    static getInstance()
    {
        if (Map.#instance === null)
        {
            Map.#instance = new Map();
        }

        return Map.#instance;
    }

    /**
     * Removes all Nodes from the grid
     */
    #clearGrid()
    {
        for (let i = 0; i < this.MAP_SIZE.HEIGHT; ++i)
        {
            this.grid[i] = [];
            for (let j = 0; j < this.MAP_SIZE.WIDTH; ++j)
            {
                this.grid[i][j] = null;
            }
        }
    }

    /**
     * Generates a new random map
     */
    generate(seed = "")
    {
        // Check probabilities
        let totalProbability = 0;
        for (let key in this.NODE_PROBABILITY)
        {
            let value = this.NODE_PROBABILITY[key];
            totalProbability += value;
        }

        if (totalProbability !== 1)
        {
            throw "All NODE_PROBABILITY values must add up to 1!";
        }

        // Clear previous grid
        this.#clearGrid();

        // Seed random number generator (or don't, you know. Whatever...)
        this.seed = seed;
        let prng;
        if (seed === "")
        {
            prng = new Math.seedrandom();
        }
        else
        {
            prng = new Math.seedrandom(seed);
        }

        // Generate nodes in the grid
        for (let i = 0; i < this.MAP_SIZE.HEIGHT; ++i)
        {
            for (let j = 0; j < this.MAP_SIZE.WIDTH; ++j)
            {
                let selectedKey = Utilities.weightedRandom(this.NODE_PROBABILITY, prng);
                let newNode = null;
                switch (selectedKey)
                {
                    case "EMPTY":
                        newNode = new Node(Node.Type.EMPTY, j, i);
                        break;
                    case "ASTEROIDS":
                        newNode = new Node(Node.Type.ASTEROIDS, j, i, 8);
                        break;
                    case "PLANET":
                        newNode = new Node(Node.Type.PLANET, j, i, 10);
                        break;
                    default:
                        throw "Unknown value appeared!" + selectedKey;
                        break;
                }
                this.grid[i][j] = newNode;
            }
        }
    }

    /**
     * Returns a string representing nodes by a letter (P=Planet, A=Asteroids,
     * .=Empty)
     * @return {string} Grid representation
     */
    testDrawGrid()
    {
        let draw = "<table id='grid' style='border-collapse: collapse;'>";

        for (let i = 0; i < this.MAP_SIZE.HEIGHT; ++i)
        {
            if (i === 0)
            {
                draw += "<tr><th> </th>";
                for (let j = 0; j < this.MAP_SIZE.WIDTH; ++j)
                {
                    draw += "<th>" + j + "</th>";
                }
                draw += "</tr>"
            }
            for (let j = 0; j < this.MAP_SIZE.WIDTH; ++j)
            {
                if (j === 0)
                {
                    draw += "<th>" + i + "</th>";
                }
                let node = this.grid[i][j];
                draw += "<td style='width: 15px; border: 1px solid black; text-align: center'>";
                if (node.type === Node.Type.EMPTY)
                {
                    draw += "-";
                }
                else if (node.type === Node.Type.PLANET)
                {
                    draw += "P";
                }
                else if (node.type === Node.Type.ASTEROIDS)
                {
                    draw += "A";
                }
                else
                {
                    draw += "?";
                }
                draw += "</td>"
            }
            draw += "</tr>"
        }

        draw += "</table>";

        return draw;
    }
}