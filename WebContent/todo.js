document.getElementById("menu").addEventListener("click", myFunction);
var width = document.getElementById("side-nav").clientWidth;
var span = document.getElementsByTagName("span");
var id;
var count = 0;
var index = 0;
var tasks = [];
var listId;

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
		var task = {id:"", name:name,status:true, data:[]};
		return task;
	}

	function addNewList(e) {
		if(e.keyCode == 13) {
			newList();
		}
	}

	function newList() {
		var step = {id:"", name:name, status:true, checked:false, steps:[]};
		var span = document.createElement("span");
		step.id = index++;
		step.name = document.getElementById("input").value;
		var taskItem = document.createElement("div");
		var img = document.createElement("img");
		var task = tasks[id];
		console.log(task.id+"task object");
		img.setAttribute("src", "round.png");
		img.id = "img"+step.id;
		taskItem.id = step.id;
		span.id = "list"+step.id;
		console.log(taskItem.id)
		taskItem.appendChild(img);
		taskItem.style.padding = "2% 5%";
		console.log(step.name);
		span.innerHTML = step.name;
		taskItem.appendChild(span);
		document.getElementById("input").value="";
		console.log(taskItem)
		span.addEventListener("click",myList.bind(taskItem));
		img.addEventListener("click", function() {
			if(!step.checked) {
				img.setAttribute("src", "check.svg");
				step.checked = true;
				span.style.textDecoration = "line-through";
			} else {
				img.setAttribute("src", "round.png");
				step.checked = false;
				span.style.textDecoration = "none";
			}
			console.log(img.src);
		});
		if(step.name == '') {
		} else {
			document.getElementById("myList").appendChild(taskItem);
			task.data.push(step);
		}
		show();
	}

	function myList() {
		var headDiv= document.getElementById("head");
		var h2 = document.createElement('h2');
		console.log(tasks[id].data[listId])
		//var checked = tasks[id].data[listId].checked;
		headDiv.innerHTML = "";
		headDiv.style.textDecoration = "line-through";
		document.getElementById("steps").innerHTML = "";
		var img = document.createElement("img");
		img.setAttribute("src", "round.png");
		img.id = listId;
		listId = this.id;
		console.log(tasks[id].data[listId]+ "id"+this.id)
		var input = document.createElement('input');
		input.id = "headList";
		var list = tasks[id].data;
		console.log(list+"====="+span+"++++")
		console.log(list[this.id].steps)
		input.setAttribute("type", "text");
		input.setAttribute("value", list[this.id].name);
		h2.appendChild(input);
		console.log(input,tasks[id].data[listId].checked);
		headDiv.appendChild(img);
		headDiv.appendChild(h2);
		input.addEventListener("keydown", editList);
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

	function editList(e) {
		if(e.keyCode == 13) {
			var headDiv= document.getElementById("head");
			var value = document.getElementById("headList").value;
			console.log(tasks[id].data[listId])
			tasks[id].data[listId].name = value;
			console.log(tasks[id].data[listId].name)
			console.log(value)
			console.log("list"+listId)
		console.log(document.getElementById("list"+listId))
			document.getElementById("list"+listId).innerHTML = value;
			console.log(document.getElementById("list"+listId))
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
		span.id = "span"+task.id;
		task.name = document.getElementById("newTask").value;
		tasks.push(task);
		img.setAttribute("src", "list.png");
		span.innerHTML = task.name;
		newDiv.appendChild(img);
		newDiv.appendChild(span);
		newDiv.id = task.id;
		newDiv.style.height = "24px";
		document.getElementById("tasks").appendChild(newDiv);
		document.getElementById("newTask").value="";
		id = task.id;
		newDiv.addEventListener("click",myTask.bind(newDiv));
		console.log(newDiv.id+"new task i task"+task.id);
	}

	function myTask() {
		var listHead = document.getElementById("list-head");
		var h2 = document.createElement('h2');
		id = this.id;
		console.log(id)
		var name = tasks[id].name;
		console.log(name+"sdjfhjshfdsf");
		listHead.innerHTML="";
		var head = document.createElement('input');
		head.setAttribute("type", "text");
		head.setAttribute("value", name);
		head.id = "headTask";
		h2.appendChild(head);
		listHead.appendChild(h2);
		console.log(listHead)
		document.getElementById("headTask").addEventListener("keydown", editTask);
		console.log(count+"Count");
		showTask(id);
	}

	function showTask(id) {
		document.getElementById("myList").innerHTML = "";
		console.log(id+"datd"+tasks[id].data);
		var list = tasks[id].data;
		console.log(list);
		index = 0;
		console.log(index)
		for(i=0; i<list.length; i++) {
			var taskItem = document.createElement("div");
			taskItem.id = index++;
			var img = document.createElement("img");
			taskItem.appendChild(img);
			taskItem.style.padding = "2% 5%";
			console.log(list[i].name+"LEN"+list[i].checked)
			var span = document.createElement("span");
			span.id = "list"+taskItem.id;
			span.innerHTML=list[i].name;
			if(!list[i].checked) {
				img.setAttribute("src", "round.png");
			} else {
				img.setAttribute("src", "check.svg");
				span.style.textDecoration = "line-through";
			}
			console.log(listId)
			taskItem.appendChild(span);
			document.getElementById("myList").appendChild(taskItem);
			taskItem.addEventListener("click",myList.bind(taskItem));
		}
	}

	function editTask(e) {
		console.log(document.getElementById("headTask"));
		if(e.keyCode == 13) {
			var listHead = document.getElementById("list-head");
			var value = document.getElementById("headTask").value;
			tasks[id].name = value;
			h2.appendChild(value);
			console.log(this);
			console.log("span"+id)
			console.log(document.getElementById("span"+id))
			document.getElementById("span"+id).innerHTML = value;
			console.log(document.getElementById("headTask").innerHTML);
		}
	}
