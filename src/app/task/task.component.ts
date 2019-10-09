import { Component, OnInit, Input} from '@angular/core';
import { AppComponent } from '../app.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() list : Object[];
  constructor(private appService:AppService) { }

  ngOnInit() {
  }

  tasks:Object[];
  newTask(event) {
    this.tasks = this.appService.task.tasks;
    if(event.target.value) {
      var subTask = {id:Number, name:String, steps:[], checked:Boolean = false};
      lenght:Number = this.tasks.length;
      console.log(this.tasks.length)
      subTask.id = this.tasks.length;
      subTask.name = event.target.value;
      this.tasks.push(subTask);
      event.target.value = "";
    }
  }

  hide : boolean;
  getSubTask(subTask) {
    this.appService.setHideTask(true);
    this.hide = this.appService.getHideStep();
    this.appService.setSubTask(subTask);
  }

  updateTask(event) {
    if(event.target.value) {
      var subTask = this.appService.getTask();
      subTask.name = event.target.value; 
    }
  }

  checked(subTask) {
    subTask.checked = !subTask.checked;
  }
  
  hideStep() {
    this.hide = this.appService.getHideStep();
  }

  delete(task) {
    this.appService.list.splice(this.appService.list.indexOf(task),1);
    console.log(this.appService.list.indexOf(task))
    //this.appService.list.splice(this.appService.list.indexOf(task));
  }
}