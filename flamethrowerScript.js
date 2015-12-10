#pragma strict

public var projectile : GameObject; // slot to drag grenade into
private var speed : float = 700;

function Update () {
	if(Input.GetKeyDown(KeyCode.LeftShift)){
		var clone : GameObject = Instantiate(projectile, transform.position, transform.rotation);
	}
}