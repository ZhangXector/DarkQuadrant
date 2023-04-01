Dark Quadrant Game Design Document
==================================

Story
-----
You find yourself as leader of a space-faring civilization. You start with a scout ship, and a home colony on a planet. Explore your surroundings, capture resources, and battle for dominance in the **Dark Quadrant**.

Systems
-------

### Input (Keyboard/Mouse)
Movement, actions, etc. Gamepad support with `Gamepad` API (HTML5).

- N S E W movement
- Inspect (Node, colony, unit)
- Activate (Unit)
- Build (Colony)
- Bookmarks (number keys? How to do it on gamepad? Radial menu with audio cues?)
- End turn

### World Map
Grid based, 2-dimensional array (nodes)

### Nodes
- Planets (colonization)
- Asteroid fields (resource gather)
- Empty space

### Navigation
Free-movement around the map to inspect nodes and surroundings

Fog of war?

### Resources
Mine resources with a worker ship

### Units
Build units with resources mined from asteroid fields, or accumulated from planetary colonies.

- Attack by moving on to a node currently occupied
- Mine resources by leaving a worker ship on a resource node

#### Movement
Activate a unit and move within its radius to choose a destination

### Turns

### Enemies
One or more other colonies can compete for the **Dark Quadrant**

#### Enemy AI
Looks like I'm going to have to learn a little bit about enemy AI... It might be really simple to start with.

### UI
- Main menu
- Colony menu (build)
- Unit action menu

### Sound
Sound effects for notifications, nearby resources or enemies (enable/disable?), different kinds of units

### Music
'In Search Of Solitude' by Scott Buckley - released under CC-BY 4.0. www.scottbuckley.com.au

### Narration
Text to speech? Recording my own voice? Utilize screen reader (seems hardest)?

### Saving
`localStorage` for saving game state. Export as JSON?