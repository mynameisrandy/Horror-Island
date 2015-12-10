#pragma strict

private var rotate : float = 50.0;

function Update() {
	var rotateDelta : float = rotate*Time.deltaTime;
	transform.Rotate(rotateDelta,0,0);
}