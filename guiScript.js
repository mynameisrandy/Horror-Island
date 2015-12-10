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
	Debug.Log(health);
	Debug.Log(healthBar.transform.localScale.x);
}