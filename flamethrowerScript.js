#pragma strict

public var projectile : GameObject; // slot to drag grenade into
private var speed : float = 700;

function Update () {
	if(Input.GetButton("Fire1")){
		var clone : GameObject = Instantiate(projectile, transform.position, transform.rotation);
	}
}