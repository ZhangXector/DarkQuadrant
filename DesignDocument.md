Dark Quadrant Game Design Document
==================================

Systems
-------

### Input (Keyboard/Gamepad)
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

### Player
#### Inspector
Free-movement around the map to inspect nodes and surroundings

Fog of war?

#### Shortcuts
Some shortcuts to move around the map more quickly by list or hotkey
##### Overall (player) shortcuts
- Known enemies
  - Colonies (list)
    - Positions
  - Units (list)
    - Positions/Type

##### Unit shortcuts
- In-range
  - Asteroid fields (occupied or not) (list)
    - Positions/Hostile
  - Enemies (units and colonies) (list)
    - Positions/Type

##### Hotkeys
Allow binding for units and/or colonies using keyboard number keys (1-8) or radial joystick (plus other button?)

Need some way to make navigating the radial menu easy. Sounds? Number readout?

### Resources
Mine resources with a worker ship

### Units
Build units with resources mined from asteroid fields, or accumulated from planetary colonies.

- Attack by moving on to a node currently occupied
- Mine resources by leaving a worker ship on a resource node

#### Movement
Activate a unit and move within its radius to choose a destination

### Turns
NOTE: Notify steps will only be needed for player, not AI

#### Start of turn tasks
- Reset Unit Movement
- Calculate income & _notify_
- Instantiate units & _notify_
- Increment turn-based values (ship build times)
- _Notify_ of sightings or attacks

#### During turn tasks
- Move units
- Change build (refund?)
- Attack (unit or colony)
- Build colony (consumes worker ship)
- AI Only
  - AI decision-making process \*_sigh_\*
- Player Only
  - Move "cursor"
  - Inspect Node
    - Maybe this could be sonar-like, based on a certain range? There's enough empty space to make it tedious.

#### End turn tasks
- Start next player turn

### Game loop (tick/update)
- Check for input (keyboard and gamepad)
- Check for win condition:
  - If all other players except for the current player (AI included) have a colony count of 0, current player wins!

### Tutorial
Movement, inspector, building, scanning, gathering resources
Maybe some basic objectives, or a separate game mode? (Tutorial vs. New Game?)

### Enemies
One or more other species can compete for the **Dark Quadrant**

#### Enemy AI
Looks like I'm going to have to learn a little bit about enemy AI...
It might be really simple to start with.

### UI
- Main menu
- Colony menu (build)
- Unit action menu
- Readouts for area scans

### Sound
Sound effects for notifications, nearby resources or enemies (enable/disable?), different kinds of units?
Ambient noises for aspects of the game/menus
Pingable sonar-style local area map

### Narration
Text to speech? Prerecorded voiceover? Utilize screen reader (seems hardest, but most accessible?)
Windows/Chrome screen reader support

### Saving
`localStorage` for saving game state. Export as JSON?
Auto save?

### Additional Resources for Accessibility
http://web.archive.org/web/20120417131242/http://www.blindcomputergames.com/guidelines/guidelines.html
https://gameaccessibilityguidelines.com/full-list/
https://www.24a11y.com/2019/game-accessibility-and-the-web/
https://www.w3.org/WAI/ARIA/apg/patterns/