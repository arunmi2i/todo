import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  constructor(private appService:AppService) { }
  sub:Object;
  isHide : boolean = this.appService.getHideStep();
  ngOnInit() {
  }

  /**
   * Add steps for the subtask which user entered
   * @param event 
   */
  newStep(event) {
    this.sub = this.appService.subTask.steps;
    if(event.target.value) {
      console.log(this.sub,event.target.value)
      var step = {name:String, checked:Boolean}
      step.name = event.target.value;
      this.sub.push(step);
      event.target.value = "";
    }
  }

  /**
   * Update the subtask which user change the name of subtask
   * @param event 
   */
  updateSubTask(event) {
    if(event.target.value) {
      var subTask = this.appService.getSubTask();
      subTask.name = event.target.value; 
    }
  }

  checked(subTask) {
    console.log(subTask)
    subTask.checked = !subTask.checked;
  }

  /**
   * Change the status of the subtask from checked to unchecked and vice versa
   * @param step 
   */
  checkStep(step) {
    step.checked = !step.checked;
  }

  /**
   * Delete the subtask when click on delete icon
   * @param subTask 
   */
  delete(subTask) {
    this.appService.task.tasks.splice(this.appService.task.tasks.indexOf(subTask),1);
    this.hide();
  }

  /**
   * Hide the step content div when hide is clicked
   */
  hide() {
    this.appService.setHideTask(false);
  }

  /**
   * Deletes the step for the corresponding subtask
   * @param step 
   */
  deleteStep(step) {
    this.appService.subTask.steps.splice(this.appService.subTask.steps.indexOf(step),1);
  }
}
