﻿#pragma strict

import System.Collections.Generic;

private var health:float = 100;

var inventory = new Dictionary.<String,int>();
inventory["wood"] = 0;
inventory["wire"] = 0;
inventory["hammer"] = 0;
inventory["hacksaw"] = 0;
inventory["axe"] = 0;
inventory["nails"] = 0;
inventory["total"] = 0;

InvokeRepeating("reduceHealth",15,15);

function Update() {
	// If Health is 0, Game Over
	if(health <= 0){
		Application.LoadLevel("GameOver");
	}
		
	// If Player Collects all 6 Items, you win!
	if(inventory["total"] == 6){
		Application.LoadLevel("Finish");
	}
}

function reduceHealth(){
	health--;
}

function getHealth(){
	return health;
}

// Pick Up Items and Health
function OnTriggerEnter(other:Collider) {
		
	// wood
	if(other.tag == "wood") {
		inventory["wood"] += 1;
		inventory["total"] += 1;
		//Debug.Log(inventory["total"]);
		Destroy(other.gameObject);

		GameObject.FindGameObjectWithTag("wood_ui").GetComponent(UI.RawImage).texture = Resources.Load("Wood_E", typeof(Texture)) as Texture;
	}
	
	// axe
	if(other.tag == "axe") {
		inventory["axe"] += 1;
		inventory["total"] += 1;
		//Debug.Log(inventory["total"]);
		Destroy(other.gameObject);

		GameObject.FindGameObjectWithTag("axe_ui").GetComponent(UI.RawImage).texture = Resources.Load("Axe_E", typeof(Texture)) as Texture;
	}
	
	// Barbed Wire
	if(other.tag == "wire") {
		inventory["wire"] += 1;
		inventory["total"] += 1;
		//Debug.Log(inventory["total"]);
		Destroy(other.gameObject);

		GameObject.FindGameObjectWithTag("wire_ui").GetComponent(UI.RawImage).texture = Resources.Load("Wire_E 1", typeof(Texture)) as Texture;
	}

	// Nail
	if(other.tag == "nail") {
		inventory["nails"] += 1;
		inventory["total"] += 1;
		//Debug.Log(inventory["total"]);
		Destroy(other.gameObject);

		GameObject.FindGameObjectWithTag("nail_ui").GetComponent(UI.RawImage).texture = Resources.Load("Nail_E", typeof(Texture)) as Texture;
	}

	// Hacksaw
	if(other.tag == "hacksaw") {
		inventory["hacksaw"] += 1;
		inventory["total"] += 1;
		//Debug.Log(inventory["total"]);
		Destroy(other.gameObject);

		GameObject.FindGameObjectWithTag("hacksaw_ui").GetComponent(UI.RawImage).texture = Resources.Load("HackSaw_E", typeof(Texture)) as Texture;
	}	

	// hammer
	if(other.tag == "hammer") {
		inventory["hammer"] += 1;
		inventory["total"] += 1;
		//Debug.Log(inventory["total"]);
		Destroy(other.gameObject);

		GameObject.FindGameObjectWithTag("hammer_ui").GetComponent(UI.RawImage).texture = Resources.Load("Hammer_E", typeof(Texture)) as Texture;
	}
	
	
	// Health
	if (other.tag == "healthpack" && health < 100)
	{
		health++;
		if(health > 100){
			health = 100;
		}
		Destroy(other.gameObject);
	}
		
	if (other.tag == "healthpack" && health == 100) {
		health = 100;
	} 
	
	//Damage
	if (other.tag == "campFire" || other.tag == "Water") 
	{
		reduceHealth();
	}
	
	if (other.tag == "Ghoul") 
	{
		health -= 5;
	}
	
//	if (other.tag == "Ghoul" || other.tag == "Ghoul1" || other.tag == "Ghoul_Hospital" || other.tag == "Ghoul_Axe" ||
//		other.tag == "Ghoul_Nail" || other.tag == "Ghoul_Hammer"|| other.tag == "Ghoul_Wire" || 
//		other.tag == "Ghoul_Hacksaw"|| other.tag == "Ghoul_Wood") 
//	{
//		health -= 5;
//	}
	
}