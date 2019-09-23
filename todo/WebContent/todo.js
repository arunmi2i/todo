document.getElementById("menu").addEventListener("click", myFunction);
var width = document.getElementById("side-nav").clientWidth;
var span = document.getElementsByTagName("span");
console.log(width);

	function myFunction() {
		console.log("check");
		if(document.getElementById("side-nav").clientWidth < 100) {
			open();
		} else {
			close();
		}
	}
	
	function open() {
		document.getElementById("side-nav").style.width="20%";
		document.getElementById("list").style.width="80%";
		//document.getElementById("details").style.width="25%";
		var i;
		for(i=0; i<span.length; i++) {
			span[i].style.display="inline";
		}
	}
	
	function close() {
		document.getElementById("side-nav").style.width="6%";
		document.getElementById("list").style.width="74%";
		var i;
		for(i=0; i<span.length; i++) {
			span[i].style.display="none";
		}
		console.log(span);
	}

document.getElementById("input").addEventListener("keydown", addNewList);
var task = {newTask:newTask, data:[]};
var list =[];
	function addNewList(e) {
		if(e.keyCode == 13) {
			newList();
		}
	}

	function newList() {
		var span = document.createElement("span");
		var inputValue = document.getElementById("input").value;
		var taskItem = document.createElement("div");
		var img = document.createElement("img");
		img.setAttribute("src", "round.png");
		taskItem.appendChild(img);
		taskItem.style.padding = "2% 5%";
		console.log(inputValue);
		span.innerHTML = inputValue;
		taskItem.appendChild(span);
		if(inputValue == '') {
		} else {
			document.getElementById("myList").appendChild(taskItem);
			task.data.push(inputValue);
			console.log(task.data+"osieugise");
		}
		document.getElementById("input").value="";
	}
	
document.getElementById("newTask").addEventListener("keydown", addNewTask);
	function addNewTask(e) {
		if(e.keyCode == 13 && document.getElementById("newTask").value != "") {
			newTask();
		}
	}
	
	function myTask() {
		var listHead = document.getElementById("list-head");
		var headValue = listHead.querySelector("h2");
		listHead.innerHTML="";
		var head = document.createElement('h2');
		console.log(head.value+"sdf");
		head.innerHTML =  task.newTask;
		listHead.append(head);
	}

	function newTask() {
		var span = document.createElement("span");
		var newDiv = document.createElement("div");
		var img = document.createElement("img");
		task.newTask = document.getElementById("newTask").value;
		img.setAttribute("src", "list.png");
		span.innerHTML = task.newTask;
		newDiv.appendChild(img);
		newDiv.appendChild(span);
		newDiv.id = "newDiv";
		newDiv.style.height = "24px";
		list.push(newDiv);
		document.getElementById("tasks").appendChild(newDiv);
		document.getElementById("newTask").value="";
		myTask();
		console.log(list+"new task i task");
		/*
		document.getElementById("newDiv").addEventListener("click", getTask);
		function getTask() {
			console.log("get the task");
		}*/
	}
	
	function myTask() {
		for(i=0; i<list.length; i++) {
			list[i].addEventListener("click",getTask);
			function getTask() {
				console.log(list[i]);
				console.log("get the task");
				myTask();
			}
		}
	}

