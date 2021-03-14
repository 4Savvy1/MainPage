function toggleLeftPanel() {
	var container = document.getElementById("container");
	if (container.className.indexOf("left-panel-visible") == -1) {
		container.className = "left-panel-visible " + container.className; 
	} else { 
		container.className = container.className.replace("left-panel-visible", "");
		container.className.trimLeft();
	}
}

function toggleRightPanel() {
	var container = document.getElementById("container");
	if (container.className.indexOf("right-panel-visible") == -1) {
		container.className += " right-panel-visible "; 
	} else { 
		container.className = container.className.replace("right-panel-visible", "");
		container.className.trimRight();
	}
}
