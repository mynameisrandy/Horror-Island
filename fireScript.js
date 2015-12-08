#pragma strict

public var projectile : GameObject; // slot to drag grenade into
public var fireRate : float = 0.5; // how long until next shot can be fired
private var nextFire : float; // when the player can shoot next
public var speed : float;

function Update () {
	if(Input.GetButton("Fire1") && Time.time > nextFire){
		nextFire = Time.time + fireRate;
		var clone : GameObject = Instantiate(projectile, transform.position, transform.rotation);
		clone.GetComponent.<Rigidbody>().velocity = transform.TransformDirection(Vector3(30,0,speed));
		Physics.IgnoreCollision(clone.GetComponent.<Collider>(), transform.root.GetComponent.<Collider>());
	}
}



// Shoot at the vehicles and Destroy
function OnTriggerEnter(other:Collider) {

	if (other.tag == "car")
	{
		Destroy(other.gameObject);
	}

}