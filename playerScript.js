#pragma strict

import System.Collections.Generic;

private var health:int = 100;

var inventory = new Dictionary.<String,int>();
inventory["axe"] = 0;
inventory["knife"] = 0;

function Update() {
	InvokeRepeating("reduceHealth",120,120);
	if(health == 0){
		Application.LoadLevel(Application.loadedLevel+2);
	}
}

function reduceHealth(){
	health--;
}