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

// Pick Up Items
function OnTriggerEnter(other:Collider) {

	// Barbed Wire
	if(other.tag == "wire") {
		inventory["wire"] += 1;
		Destroy(other.gameObject);

		GameObject.FindGameObjectWithTag("wire_texture").GetComponent(UI.RawImage).texture = Resources.Load("Wire_E", typeof(Texture)) as Texture;

		for(var invItem : String in inventory.Keys ) {
			print(invItem + " " + inventory[invItem]);
		}
	}

	// Nail
	if(other.tag == "nail") {
		inventory["nails"] += 1;
		Destroy(other.gameObject);

		GameObject.FindGameObjectWithTag("nails_texture").GetComponent(UI.RawImage).texture = Resources.Load("Bolt_E", typeof(Texture)) as Texture;

		for(var invItem : String in inventory.Keys ) {
			print(invItem + " " + inventory[invItem]);
		}
	}

	// Hacksaw
	if(other.tag == "hacksaw") {
		inventory["hacksaw"] += 1;
		Destroy(other.gameObject);

		GameObject.FindGameObjectWithTag("hacksaw_texture").GetComponent(UI.RawImage).texture = Resources.Load("HackSaw_E", typeof(Texture)) as Texture;

		for(var invItem : String in inventory.Keys ) {
			print(invItem + " " + inventory[invItem]);
		}
	}	

	// hammer
	if(other.tag == "hammer") {
		inventory["hammer"] += 1;
		Destroy(other.gameObject);

		GameObject.FindGameObjectWithTag("hammer_texture").GetComponent(UI.RawImage).texture = Resources.Load("Hammer_E", typeof(Texture)) as Texture;

		for(var invItem : String in inventory.Keys ) {
			print(invItem + " " + inventory[invItem]);
		}
	}

	// wood
	if(other.tag == "wood") {
		inventory["wood"] += 1;
		Destroy(other.gameObject);

		GameObject.FindGameObjectWithTag("wood_texture").GetComponent(UI.RawImage).texture = Resources.Load("Wood_E", typeof(Texture)) as Texture;

		for(var invItem : String in inventory.Keys ) {
			print(invItem + " " + inventory[invItem]);
		}
	}

	// axe
	if(other.tag == "axe") {
		inventory["axe"] += 1;
		Destroy(other.gameObject);

		GameObject.FindGameObjectWithTag("axe_texture").GetComponent(UI.RawImage).texture = Resources.Load("Axe_E", typeof(Texture)) as Texture;

		for(var invItem : String in inventory.Keys ) {
			print(invItem + " " + inventory[invItem]);
		}
	}

	// If Player Collects all 6 Items 
	// Win Game & Load Congrats Screen



}
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