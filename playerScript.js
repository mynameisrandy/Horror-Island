#pragma strict

import System.Collections.Generic;

private var health:int = 100;
private var speed:int = 5;
public var jumpHeight:int = 20;
private var playerRotation:int = 0;
private var motor : CharacterMotor;

var inventory = new Dictionary.<String,int>();
inventory["wood"] = 0;
inventory["wire"] = 0;
inventory["hammer"] = 0;
inventory["hacksaw"] = 0;
inventory["axe"] = 0;
inventory["nails"] = 0;

function Awake () {
	motor = GetComponent(CharacterMotor);
}

function Update() {
	InvokeRepeating("reduceHealth",120,120);
	if(health == 0){
		Application.LoadLevel(Application.loadedLevel+2);
	}
}

function FixedUpdate(){
	GetComponent.<Rigidbody>().velocity.x = speed*Input.GetAxis("Horizontal");
	GetComponent.<Rigidbody>().velocity.z = speed*Input.GetAxis("Vertical");
	if(GetComponent.<Rigidbody>().velocity.z < 0){
		// backwards
		playerRotation = 180;
	}else if(GetComponent.<Rigidbody>().velocity.z > 0){
		// forwards
		playerRotation = 0;
	}else if(GetComponent.<Rigidbody>().velocity.x < 0){
		// left
		playerRotation = 270;
	}else if(GetComponent.<Rigidbody>().velocity.x > 0){
		// right
		playerRotation = 90;
	}
	transform.eulerAngles.y -= (transform.eulerAngles.y-playerRotation)/5;
	
	motor.inputJump = Input.GetButton("Jump");
}

function reduceHealth(){
	health--;
}

@script RequireComponent (CharacterMotor)