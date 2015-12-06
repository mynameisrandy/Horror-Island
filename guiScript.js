#pragma strict

var healthBar:UI.RawImage;
var help:UI.Text;

function Awake(){
	help.enabled = false;
}

function Update () {
	var player = GameObject.FindGameObjectWithTag("Player").GetComponent(playerScript);
	var health = player.getHealth();
	healthBar.transform.localScale.x = health/100; 
}