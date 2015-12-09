#pragma strict

// Shoot at the vehicles and Destroy
function OnTriggerEnter(other:Collider) {
	
	if(other.tag == "Ghoul"){;
		var enemy = GameObject.FindGameObjectWithTag("Ghoul").GetComponent(enemyScript);
		enemy.reduceHealth();
	}

}