using UnityEngine;
using System.Collections;

public class Sprint : MonoBehaviour 
{
	public CharacterMotor CM;
	public float walkSpeed, SprintSpeed;
	public bool Clock = true;
	
	// Use this for initialization
	void Start () 
	{
		CM = (CharacterMotor)GetComponent<CharacterMotor> ();
		walkSpeed = CM.movement.maxForwardSpeed;
		SprintSpeed = walkSpeed * 2;
		Screen.lockCursor = true;
	}
	
	// Update is called once per frame
	void Update () 
	{
		if (Input.GetKeyDown (KeyCode.LeftShift)) 						//Sprint
		{
			CM.movement.maxForwardSpeed = SprintSpeed;
		}
		if (Input.GetKeyUp (KeyCode.LeftShift)) 
		{
			CM.movement.maxForwardSpeed = walkSpeed;
		}
		if (Input.GetKeyDown (KeyCode.F5) && Clock == true) 
		{
			Screen.lockCursor = false;
			Clock = false;
		}
		else if (Input.GetKeyDown (KeyCode.F5) && Clock == false)
		{
			Screen.lockCursor = true;
			Clock = true;
		}
	}
}
