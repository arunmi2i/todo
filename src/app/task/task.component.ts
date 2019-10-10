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
  tasks:Object[];
  hide : boolean;
  constructor(private appService:AppService) { }

  ngOnInit() {
  }

  /**
   * Get the task and add newsub task in the task
   * @param event 
   */
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

  /**
   * Get the subtask from the array by clicking the name
   * @param subTask 
   */
  getSubTask(subTask) {
    this.appService.setHideTask(true);
    this.hide = this.appService.getHideStep();
    this.appService.setSubTask(subTask);
  }

  /**
   * Update the name of the subtask which user entered
   * @param event 
   */
  updateTask(event) {
    if(event.target.value) {
      var subTask = this.appService.getTask();
      subTask.name = event.target.value; 
    }
  }

  /**
   * Change the staus of the subtask from unchecked to checked and vise versa
   * @param subTask 
   */
  checked(subTask) {
    subTask.checked = !subTask.checked;
  }

  /**
   * 
   *
  hideStep() {
    this.hide = this.appService.getHideStep();
  }*/

  /**
   * Delete the subtask from the array using the index of array
   * @param task 
   */
  delete(task) {
    this.appService.list.splice(this.appService.list.indexOf(task),1);
  }
}