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
  newStep(event) {
    console.log(this.isHide)
    this.sub = this.appService.subTask.steps;
    if(event.target.value) {
      console.log(this.sub,event.target.value)
      var step = {name:String}
      step.name = event.target.value;
      this.sub.push(step);
      event.target.value = "";
    }
  }

  updateSubTask(event) {
    if(event.target.value) {
      var subTask = this.appService.getSubTask();
      subTask.name = event.target.value; 
    }
  }

  checked(subTask) {
    console.log(this.appService.task.tasks)
    subTask.checked = !subTask.checked;
  }

  delete(subTask) {
    this.appService.task.tasks.splice(this.appService.task.tasks.indexOf(subTask),1);
    this.hide();
  }

  hide() {
    this.appService.setHideTask(false);
  }
}
