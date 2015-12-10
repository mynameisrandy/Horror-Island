#pragma strict

private var enemyHealth : int = 1;

var waypoint : Transform[]; // Empty array of transform, will hold waypoints
private var speed : float = 1; // Speed of enemy
private var currentWaypoint : int; // Hold Current value of waypoint



function Update () {
	
	
	// currentWaypoint less then waypoint.length run this code
	if(currentWaypoint < waypoint.length){
		var target : Vector3 = waypoint[currentWaypoint].position;
		// Hold position of current waypoint in variable
		var moveDirection : Vector3 = target - transform.position;
		// Target is current waypoint pos - enemypos
		var velocity = moveDirection.normalized * speed;
		var rotation = Quaternion.LookRotation(moveDirection); 
		transform.rotation = rotation;
		
		if(moveDirection.magnitude < 1) {
			currentWaypoint++;
		}
		
	} else { // We are past last waypoint, so reset to 0
		currentWaypoint = 0;
	}	
	
	GetComponent.<Rigidbody>().velocity = velocity;
	
	
	
}

function reduceHealth(){
	enemyHealth--;
	if(enemyHealth == 0){
		Destroy(gameObject);
	}
	//Debug.Log(enemyHealth);
}