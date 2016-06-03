// button that gets input
var button = document.getElementById("button");
// add event listener
button.addEventListener("click", determineInput);


function determineInput (clickEvent) {
	// get inputs by id
	var treeHeight = document.getElementById("height").value;
	var treeCharacter = document.getElementById("character").value;
	// get reference to div
	var treeDiv = document.getElementById("treeDiv");	
	// create empty array
	var buildTreeObj = {
			height: treeHeight,
			character: treeCharacter
	};
	buildTree(buildTreeObj);
}


function buildTree (buildTreeObj) {	
	var characters = buildTreeObj.character;
	var spaceCount = buildTreeObj.height - 1;
	var charCount = 1;
	
	for (i = 0; i < buildTreeObj.height; i++) {
		var spaces = " ".repeat(spaceCount);
		var charString = characters.repeat(charCount);
		var tree = spaces + charString;
		console.log(tree);
		spaceCount -= 1;
		charCount += 2;
	}

}	
