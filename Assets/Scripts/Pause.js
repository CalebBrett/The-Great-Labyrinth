#pragma strict

var PauseMenu : Rect = Rect(85, 10, 1200, 700);
var CompleatMenu : Rect = Rect(85, 10, 1200, 700); 
var isPause = false;
var isFinish = false;
var skin : GUISkin;
var enMark : boolean = false;
var Marker : GameObject;
 
function Start() 
{
	Time.timeScale = 1;
	if(Difficulty.Difficulty == 1)
	{
		Difficulty.candes = true;
	}
	if(Difficulty.Difficulty == 2)
	{
		GameObject.Find("Minimap").SetActive(false);
		enMark = true;
		Difficulty.candes = true;
	}
	if(Difficulty.Difficulty == 3)
	{
		GameObject.Find("Minimap").SetActive(false);
		Difficulty.candes = true;
	}
}
function Update () 
{
	if( Input.GetKeyDown(KeyCode.Escape) || Input.GetKeyDown(KeyCode.P))
	{
		Difficulty.candes = false;
		var mouseLook = GetComponent.<MouseLook>();
        mouseLook.enabled = !mouseLook.enabled;
        Screen.lockCursor = false;
		isPause = !isPause;
		if(isPause)
		{
			Time.timeScale = 0;
		}
		else
		Screen.lockCursor = true;
		Time.timeScale = 1;
  	}
   	if(enMark == true && Input.GetButtonDown ("Fire2"))
   	{
   		var Marker = Instantiate(Marker, GameObject.Find("MarkerSpawn").transform.position, Quaternion.identity);
   	}
}
 
function OnGUI()
{
	if(isPause)
	{
		GUI.skin = skin;
		GUI.Window(0, PauseMenu, ThePauseMenu, "Pause");
	}
	if(isFinish)
	{
		GUI.skin = skin;
		Screen.lockCursor = false;
		GUI.Window(0, CompleatMenu, FinishMenu, "Congradulations!");
	}
}
	 
function ThePauseMenu () 
{
	if(GUILayout.Button("Main Menu"))
	{
		Application.LoadLevel(0);
	}
	if(GUILayout.Button("Restart"))
	{
		Application.LoadLevel(Application.loadedLevel);
		isPause = false;
		Time.timeScale = 1;
	}
	if(GUILayout.Button("Quit"))
	{
		Application.Quit();
	}
}

function OnTriggerEnter(col : Collider)
{
	if(col.gameObject.name == "FINISHCOL")
	{
		isFinish = true;
		Difficulty.candes = false;
	}
}

function FinishMenu()
{
	if(GUILayout.Button("Main Menu"))
	{
		Application.LoadLevel(0);
	}
	if(GUILayout.Button("Level Select"))
	{
		Application.LoadLevel(1);
	}
	if(GUILayout.Button("Next Level"))
	{
		Application.LoadLevel(Application.loadedLevel + 1);
	}
	if(GUILayout.Button("Quit"))
	{
		Application.Quit();
	}
}