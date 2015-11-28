#pragma strict

import System.Collections.Generic;

private var health:float = 100;

var inventory = new Dictionary.<String,int>();
inventory["wood"] = 0;
inventory["wire"] = 0;
inventory["hammer"] = 0;
inventory["hacksaw"] = 0;
inventory["axe"] = 0;
inventory["nails"] = 0;

function Update() {
	if(health == 0){
		Application.LoadLevel("GameOver");
	}
}

InvokeRepeating("reduceHealth",120,120);

function reduceHealth(){
	health--;
}

function getHealth(){
	return health;
}