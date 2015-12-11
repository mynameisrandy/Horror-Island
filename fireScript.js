#pragma strict

// Shoot at the vehicles and Destroy
function OnTriggerEnter(other:Collider) {
	
	if(other.tag == "Ghoul") {;
		var enemy = GameObject.FindGameObjectWithTag("Ghoul").GetComponent(enemyScript);
		enemy.reduceHealth();
	}
	
//	if(other.tag == "Ghoul1"){;
//		var enemy1 = GameObject.FindGameObjectWithTag("Ghoul").GetComponent(enemyScript);
//		enemy1.reduceHealth();
//	}
//	
//	if(other.tag == "Ghoul_Hospital"){;
//		var enemy2 = GameObject.FindGameObjectWithTag("Ghoul").GetComponent(enemyScript);
//		enemy2.reduceHealth();
//	}
//	
//	if(other.tag == "Ghoul_Axe"){;
//		var enemy3 = GameObject.FindGameObjectWithTag("Ghoul").GetComponent(enemyScript);
//		enemy3.reduceHealth();
//	}
//	
//	if(other.tag == "Ghoul_Nail"){;
//		var enemy4 = GameObject.FindGameObjectWithTag("Ghoul").GetComponent(enemyScript);
//		enemy4.reduceHealth();
//	}
//	
//	if(other.tag == "Ghoul_Hammer"){;
//		var enemy5 = GameObject.FindGameObjectWithTag("Ghoul").GetComponent(enemyScript);
//		enemy5.reduceHealth();
//	}
//	
//	if(other.tag == "Ghoul_Wire"){;
//		var enemy6 = GameObject.FindGameObjectWithTag("Ghoul").GetComponent(enemyScript);
//		enemy6.reduceHealth();
//	}	
//	
//	if(other.tag == "Ghoul_Hacksaw"){;
//		var enemy7 = GameObject.FindGameObjectWithTag("Ghoul").GetComponent(enemyScript);
//		enemy7.reduceHealth();
//	}
//	
//	if(other.tag == "Ghoul_Wood"){;
//		var enemy8 = GameObject.FindGameObjectWithTag("Ghoul").GetComponent(enemyScript);
//		enemy8.reduceHealth();
//	}	

}