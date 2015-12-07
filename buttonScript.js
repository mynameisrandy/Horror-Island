#pragma strict

function introScreen() {
	Application.LoadLevel("Intro");
}

function startStory() {
	Application.LoadLevel("Story");
}

function startGame() {
	Application.LoadLevel("Main");
}

function objectiveMenu() {
	Application.LoadLevel("Objective");
}

function playerControl() {
	Application.LoadLevel("PlayerControls");
}

function quitGame() {
	Application.Quit();
}

function helpWindow() {
	var gui = GameObject.FindGameObjectWithTag("GUI").GetComponent(guiScript);
	gui.help.enabled = !gui.help.enabled;
}