// Menu DOM elements
const menus = {
    main: document.querySelector(".main-menu"),
    credits: document.querySelector(".credits-menu"),
    leaderboards: document.querySelector(".leaderboards-menu"),
    start: document.querySelector(".start-menu"),
    create: document.querySelector(".create-menu"),
    join: document.querySelector(".join-menu")
};

// Buttons
const buttons = {
    start: document.querySelector("#start-btn"),
    credits: document.querySelector("#credits-btn"),
    leaderboards: document.querySelector("#leaderboards-btn"),
    create: document.querySelector("#create-btn"),
    join: document.querySelector("#join-btn"),
    ready: document.querySelector("#ready-btn"),
    addTime: document.querySelector("#add-time-btn"),
    subTime: document.querySelector("#sub-time-btn"),
    go: document.querySelector("#go-btn")
};

// Back buttons
const backButtons = {
    credits: document.querySelector("#credits-back-btn"),
    leaderboards: document.querySelector("#leaderboards-back-btn"),
    start: document.querySelector("#start-back-btn"),
    join: document.querySelector("#join-back-btn"),
    create: document.querySelector("#create-back-btn")
};

// Use object.values to obtain array of menus. forEach applies function to all menus, use instead of for-loop
Object.values(menus).forEach(menu => menu.style.display = "none");
menus.main.style.display = "flex";

// Show menus
function showMenu(menuToShow) {
    Object.values(menus).forEach(menu => (menu.style.display = "none"));
    menus[menuToShow].style.display = "flex";
}

// Main menu functionality
buttons.start.addEventListener("click", () => showMenu("start"));
buttons.credits.addEventListener("click", () => showMenu("credits"));
buttons.leaderboards.addEventListener("click", () => showMenu("leaderboards"));

// Start menu functionality
var ready = true;
var start = false;

buttons.create.addEventListener("click", () => showMenu("create"));
buttons.ready.addEventListener("click", () => {
    if(ready == true) {
        buttons.ready.style.backgroundColor = "Red";
        ready = false;
        buttons.go.disabled = true;

    }
    else {
        buttons.ready.style.backgroundColor = "Green";
        ready = true;
        buttons.go.disabled = false;
    }
});

buttons.join.addEventListener("click", () => showMenu("join"));

// Create menu functionality
var timeMsg = document.querySelector("#time-msg");
var time = 0;

buttons.addTime.addEventListener("click", () => {
    if(time < 300) {
        time += 30;
        timeMsg.textContent = "Select Game Period: " + time;
        console.log(time);
    }
});

buttons.subTime.addEventListener("click", () => {
    if(time > 0) {
        time -= 30;
        timeMsg.textContent = "Select Game Period: " + time;
        console.log(time);
    }
});

// Back buttons functionality
backButtons.credits.addEventListener("click", () => showMenu("main"));
backButtons.leaderboards.addEventListener("click", () => showMenu("main"));
backButtons.start.addEventListener("click", () => showMenu("main"));
backButtons.join.addEventListener("click", () => showMenu("start"));
backButtons.create.addEventListener("click", () => showMenu("start"));
