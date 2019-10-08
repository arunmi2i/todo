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
    console.log(this.tasks);
    this.tasks = this.appService.task.tasks;
    if(event.target.value) {
      var subTask = {id:Number, name:String, steps:[], checked:Boolean = false};
      lenght:Number = this.appService.task.length;
      subTask.id = length;
      subTask.name = event.target.value;
      this.tasks.push(subTask);
      event.target.value = "";
      console.log(this.appService.task);
    }
  }

  hide : boolean;
  getSubTask(subTask) {
    console.log(subTask);
    this.hide = this.appService.getHideStep();
    this.appService.setSubTask(subTask);
  }

  updateTask(event) {
    if(event.target.value) {
      var subTask = this.appService.getTask();
      subTask.name = event.target.value; 
      console.log(this.appService.getTask());
    }
  }

  checked(subTask) {
    subTask.checked = !subTask.checked;
    console.log(subTask)
  }
  
  hideStep() {
    this.hide = this.appService.getHideStep();
  }

  onrightClick(event){
    this.hide;
}
}