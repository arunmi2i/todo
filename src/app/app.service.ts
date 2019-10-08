import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  task : Object;
  subTask : Object;
  hide : Boolean;
  constructor() { }

  setTask(task) {
    this.task = task;
  }
  getTask() {
    return this.task;
  }

  setSubTask(subTask) {
    this.subTask = subTask;
  }
  getSubTask() {
    return this.subTask;
  }

  getHideStep(): any {
    this.hide = !this.hide;
    console.log(this.hide);
    return this.hide;
  }
}
