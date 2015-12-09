#pragma strict

private var enemyHealth : int = 5;

function Update () {
	if(enemyHealth == 0){
		Destroy(gameObject);
	}
}

function reduceHealth(){
	enemyHealth--;
}