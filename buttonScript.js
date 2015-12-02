#pragma strict

function introScreen() {
	Application.LoadLevel("Intro");
}

function startGame() {
	Application.LoadLevel("Main");
}

function quitGame() {
	// Application.Quit();
	Application.LoadLevel("Intro");
}

function mainMenu() {
	Application.LoadLevel("MainMenu");
}

function objectiveMenu() {
	Application.LoadLevel("Objective");
}

function playerControl() {
	Application.LoadLevel("PlayerControls");
}