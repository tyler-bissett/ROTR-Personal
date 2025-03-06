# ROTR Redemption
Hello ROTR Redeemers, this is our web app version of the ROTR Redemption project. Please read this document before proceeding with changes.

## Setup
1. Clone repository from this page.
2. When cloned, you do *not* touch: node_modules, .gitattributes, package-lock.json, package.json, or test.js
	- The first four make sure dependencies function correctly (see "Potential Dependencies" below). Idk what they do beyond that
	- Add dependencies at your own discretion.
	- "Test.js" was me experimenting with backend.
3. Make any changes you want in public
	- I have the first commit backed up locally. Keep backups on your own laptops for redudancy.
4. Communicate your changes/pushes to avoid merge conflicts!
	- To see changes your changes instantly, install VSCode extension "Live Server" and run on /public/index.html.

## TO-DO
<ins>Yi</ins>: Styling
- Fix menu and leaderboards frontend

<ins>Parks</ins>: Communication
- Get "homepage" file from last year's group.
- See if Raynor Code is valuable to project

<ins>Bissett</ins>: Functional requirements
- Finish frontend for countdown screen and randomized question display with demo data (convert ASP text file to CSV for database storage)
	- Start in a new HTML page
- Make a countdown timer based on input time
- Create a win and lose screen with return to menu button
- Simulate multiplayer logic with JS
- Eventually, send this back to RAYNOR

<ins>Love</ins>: Looking ahead
- Determine if backend implementation is feasible (leaderboards, client-server architecture with NodeJS, Real-time interaction with SocketIO)
- Demo MongoDB for potential use as a question database; grab questions from database and display on HTML

## Reference List
https://scrimba.com/home - Learned HTML, CSS, and JS fundamentals with their free introductory courses.
https://www.w3schools.com/html/default.asp - Anything about HTML, especially tags such as audio.
https://www.w3schools.com/jsref/jsref_obj_array.asp - JS array references for functions.
https://codepen.io/diyorbek0309/pen/mdwbEve - CSS Background gradient.
https://stackoverflow.com/questions/54702124/rainbow-text-animation-using-only-css - CSS Rainbow text.
https://www.w3schools.com/howto/howto_css_team.asp - Credits page html
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions - Arrow functions for menu display.
https://stackoverflow.com/questions/3244361/can-i-access-variables-from-another-file - Access variables between files

https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax - .md Format for this document.

### Pictures
https://pngtree.com/free-png-vectors/coast-guard - USCG cutter
https://en.wikipedia.org/wiki/United_States_Coast_Guard_Academy - USCGA logo
Diagrams and questions in /public/raynor acquired from Raynor Maritime Services contact

### Future Dependencies
1. SocketIO - realtime communication
2. Node.js & Express - Backend & Game Logic
3. Mongoose or Mongodb 
4. Some deployment app
5. Optional: chat API

### Future Helpful links
https://www.geeksforgeeks.org/how-to-download-and-install-node-js-and-npm/ - Had to reinstall npm because my OS was re-imaged
https://www.geeksforgeeks.org/how-to-create-and-run-node-js-project-in-vs-code-editor/ - NodeJS installation
https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU - NodeJS Basics and connection with MongoDB/Mongoose
https://github.com/ethanbrimhall/kahoot-clone-nodejs/tree/master - Might be useful 
