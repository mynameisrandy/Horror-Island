#pragma strict

var healthBar:UI.RawImage;
var heartBar:UI.RawImage;

function Update () {
	var player = GameObject.FindGameObjectWithTag("Player").GetComponent(playerScript);
	var health = player.getHealth();
	healthBar.transform.localScale.x = health/100; 
}