#pragma strict

var skin : GUISkin;
var menuStyle : GUIStyle;
var lvlnum : int;
static var Difficulty : int = 1;
static var candes : boolean = false;
var canpress : boolean = false;
var toolbarInt = 999;
var toolbarStrings : String[] = ["Level 1", "Level 2", "Toolbar3"];

function Start()
{
	GameObject.Find("Easy").transform.position -= new Vector3(0,100,0);
	GameObject.Find("Medium").transform.position -= new Vector3(0,100,0);
	GameObject.Find("Hard").transform.position -= new Vector3(0,100,0);
	DontDestroyOnLoad(this);
}

function Update()
{
	if(candes)
	{
		Destroy(this);
	}
	if (toolbarInt == 0)
	{
		lvlnum = 2;
		GameObject.Find("Easy").transform.position = new Vector3(0.008F,0.05F,0);
		GameObject.Find("Medium").transform.position = new Vector3(0.38,0.05F,0);
		GameObject.Find("Hard").transform.position = new Vector3(0.7,0.05F,0);
		canpress = true;
	}
	if(toolbarInt == 1)
	{
		lvlnum = 3;
		GameObject.Find("Easy").transform.position = new Vector3(0.008F,0.05F,0);
		GameObject.Find("Medium").transform.position = new Vector3(0.38,0.05F,0);
		GameObject.Find("Hard").transform.position = new Vector3(0.7,0.05F,0);
		canpress = true;
	}
}

function OnGUI() 
{
	GUI.skin = skin;
    toolbarInt = GUI.Toolbar (Rect (25, 75, 600, 50), toolbarInt, toolbarStrings);
	
	if (GUI.Button(Rect(50,20,355,41),"Back",menuStyle))
	{
		Application.LoadLevel(0);
	}
	
	if(canpress)
	{
		if (GUI.Button(Rect(50,500,355,41),"Easy",menuStyle))
		{
			Application.LoadLevel(lvlnum);
			Difficulty = 1;
		}
		if (GUI.Button(Rect(550,500,420,41),"Medium",menuStyle))
		{
			Application.LoadLevel(lvlnum);
			Difficulty = 2;
		}
		if (GUI.Button(Rect(1100,500,355,39),"Hard",menuStyle))
		{
			Application.LoadLevel (lvlnum);
			Difficulty = 3;
		}
	}
}