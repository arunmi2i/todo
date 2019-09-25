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
var index = 0;
var tasks = [];
var listId;
	function addNewList(e) {
		if(e.keyCode == 13) {
			newList();
		}
	}

	function newList() {
		var step = {id:"", name:name, steps:[]};
		var span = document.createElement("span");
		step.id = index++;
		step.name = document.getElementById("input").value;
		var taskItem = document.createElement("div");
		var img = document.createElement("img");
		var task = tasks[id];
		console.log(task.id+"task object");
		img.setAttribute("src", "round.png");
		taskItem.id = step.id;
		console.log(taskItem.id)
		taskItem.appendChild(img);
		taskItem.style.padding = "2% 5%";
		console.log(step.name);
		span.innerHTML = step.name;
		taskItem.appendChild(span);
		if(step.name == '') {
		} else {
			document.getElementById("myList").appendChild(taskItem);
			task.data.push(step);
		}
		document.getElementById("input").value="";
		console.log(taskItem)
		taskItem.addEventListener("click",myList.bind(taskItem));
		//taskItem.addEventListener("click",demo.bind(taskItem));
		show();
	}

	function demo() {
		listId = this.id;
		console.log(id+ "id"+this.id)
		console.log(list+"====="+span+"++++")
		console.log(list[this.id].steps)
	}
	function myList() {
		var headDiv= document.getElementById("head");
		headDiv.innerHTML = "";
		document.getElementById("steps").innerHTML = "";
		var img = document.createElement("img");
		img.setAttribute("src", "round.png");
		listId = this.id;
		console.log(id+ "id"+this.id)
		var span = document.createElement('span');
		var list = tasks[id].data;
		console.log(list+"====="+span+"++++")
		console.log(list[this.id].steps)
		span.innerHTML = list[this.id].name;
		console.log(span);
		headDiv.appendChild(img);
		headDiv.appendChild(span);
		showSteps();
	}
	
	function showSteps() {
		var steps = tasks[id].data[listId].steps;
		console.log(steps)
		for(i=0; i<steps.length; i++) {
			console.log(steps[i])
			var span = document.createElement("span");
			var newDiv = document.createElement("div");
			var img = document.createElement("img");
			img.setAttribute("src", "round.png");
			var value = steps[i];
			span.innerHTML = value;
			newDiv.append(img);
			newDiv.append(span);
			console.log(document.getElementById("steps"));
			document.getElementById("steps").appendChild(newDiv);
		}
	}

	function show() {
		for(i=0;i<tasks.length;i++) {
			console.log(tasks);
		}
	}
document.getElementById("newStep").addEventListener("keydown", addStep);
	function addStep(e) {
		if(e.keyCode == 13 && document.getElementById("newStep").value != "") {
			newStep();
		}
	}

	function newStep() {
		var span = document.createElement("span");
		var newDiv = document.createElement("div");
		var img = document.createElement("img");
		img.setAttribute("src", "round.png");
		var value = document.getElementById("newStep").value;
		console.log(listId);
		tasks[id].data[listId].steps.push(value);
		console.log(tasks[id].data[listId].steps)
		span.innerHTML = value;
		newDiv.append(img);
		newDiv.append(span);
		console.log(document.getElementById("steps"));
		document.getElementById("steps").appendChild(newDiv);
		document.getElementById("newStep").value = "";
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
		id = this.id;
		console.log(id)
		var name = tasks[id].name;
		console.log(name+"sdjfhjshfdsf");
		listHead.innerHTML="";
		var head = document.createElement('h2');
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
		index = 0;
		console.log(index)
		for(i=0; i<list.length; i++) {
			var taskItem = document.createElement("div");
			taskItem.id = index++;
			var img = document.createElement("img");
			img.setAttribute("src", "round.png");
			taskItem.appendChild(img);
			taskItem.style.padding = "2% 5%";
			console.log(list[i].name+"LEN"+list.length)
			var span = document.createElement("span");
			span.innerHTML=list[i].name;
			var cb = document.createElement('input');
		    cb.type = 'checkbox';
		    taskItem.appendChild(cb);
			console.log(span)
			taskItem.appendChild(span);
			document.getElementById("myList").appendChild(taskItem);
			taskItem.addEventListener("click",myList.bind(taskItem));
		}
	}

	function remove() {
		var myList = document.getElementById("myList");
		while(myList.hasChildNodes()) {
		    myList.removeChild(myList.firstChild);
		}
	}