import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  task : Object;
  subTask : Object;
  hide : boolean = false;
  list : Object[] = [];
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

  setHideTask(arg0: boolean) {
    this.hide = arg0;
  }

  getHideStep(): boolean {
    return this.hide;
  }
}
