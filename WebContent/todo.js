document.getElementById("menu").addEventListener("click", myFunction);
var width = document.getElementById("side-nav").clientWidth;
var span = document.getElementsByTagName("span");
var id;

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
function createObject() {
	var task = {id:"", name:name, data:[]};
	return task;
}


var count = 0;
var tasks = [];
var id;
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
		//let task = tasks.find(x => x.id === count);
		//console.log(task.id+"task object");
		var task = tasks[id];
		console.log(task.id+"task object");
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
		}
		document.getElementById("input").value="";
		show();
	}
	
	function show() {
		for(i=0;i<tasks.length;i++) {
			console.log(tasks);
		}
	}
document.getElementById("newTask").addEventListener("keydown", addNewTask);
	function addNewTask(e) {
		if(e.keyCode == 13 && document.getElementById("newTask").value != "") {
			newTask();
		}
	}

	function newTask() {
		var span = document.createElement("span");
		var newDiv = document.createElement("div");
		var img = document.createElement("img");
		var task = createObject();
		task.id = count++;
		task.name = document.getElementById("newTask").value;
		console.log("CREATE OBJ"+task.id);
		tasks.push(task);
		img.setAttribute("src", "list.png");
		span.innerHTML = task.name;
		newDiv.appendChild(img);
		newDiv.appendChild(span);
		newDiv.id = task.id;
		newDiv.style.height = "24px";
		document.getElementById("tasks").appendChild(newDiv);
		document.getElementById("newTask").value="";
		console.log("LENGHT"+tasks.length);
		id = task.id;
		newDiv.addEventListener("click",myTask.bind(newDiv));
		console.log(newDiv.id+"new task i task"+task.id);
	}

	function myTask() {
		var listHead = document.getElementById("list-head");
		//var headValue = listHead.querySelector("h2");
		id = this.id;
		console.log(id)
		var name = tasks[id].name;
		console.log(name+"sdjfhjshfdsf");
		listHead.innerHTML="";
		var head = document.createElement('h2');
		//head.innerHTML = document.getElementById("newTask").value;
		head.innerHTML = name;
		listHead.append(head);
		console.log(count+"Count");
		showTask(id);
	}

	function showTask(id) {
		remove();
		console.log(id+"datd"+tasks[id].data);
		var list = tasks[id].data;
		console.log(list);
		for(i=0; i<list.length; i++) {
			var taskItem = document.createElement("div");
			var img = document.createElement("img");
			img.setAttribute("src", "round.png");
			taskItem.appendChild(img);
			taskItem.style.padding = "2% 5%";
			console.log(list[i]+"LEN"+list.length)
			var span = document.createElement("span");
			span.innerHTML=list[i];
			taskItem.appendChild(span);
			document.getElementById("myList").appendChild(taskItem);
		}
		list.forEach(getTaskValue);
		function getTaskValue(task, index) {
			span.innerHTML = task;
			console.log(task)
		}
	}
	
	function remove() {
		var myList = document.getElementById("myList");
		while(myList.hasChildNodes()) {
		    myList.removeChild(myList.firstChild);
		}
	}
