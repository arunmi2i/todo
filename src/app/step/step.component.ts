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
  ngOnInit() {
  }
  newStep(event) {
    this.sub = this.appService.subTask.steps;
    if(event.target.value) {
      console.log(this.sub,event.target.value)
      var step = {name:String}
      step.name = event.target.value;
      this.sub.push(step);
      event.target.value = "";
      console.log(this.sub);
    }
  }

  updateSubTask(event) {
    if(event.target.value) {
      var subTask = this.appService.getSubTask();
      subTask.name = event.target.value; 
      console.log(this.appService.getTask());
    }
  }

  checked(subTask) {
    console.log(subTask)
    subTask.checked = !subTask.checked;
  }
  
  hide : boolean;
  hideStep() {
    console.log("onload");
    this.hide = this.appService.getHideStep();
  }
}
