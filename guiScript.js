#pragma strict

var healthBar:UI.RawImage;
var help:UI.RawImage;

function Awake(){
	help.enabled = false;
}

function Update () {
	var player = GameObject.FindGameObjectWithTag("Player").GetComponent(playerScript);
	var health = player.getHealth();
	healthBar.transform.localScale.x = health/100;
	healthBar.transform.localPosition.x = (-101.7) + (100 - health);
}