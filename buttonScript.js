#pragma strict

function introScreen() {
	Application.LoadLevel("Intro");
}

function startGame() {
	Application.LoadLevel("Main");
}

function quitGame() {
	Application.Quit();
}