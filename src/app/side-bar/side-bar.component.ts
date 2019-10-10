import { Component, OnInit, Input} from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
    @Input() list;
    constructor(private appService:AppService) { }

    ngOnInit() {
    }

    //list = this.appService.list;
    isToggle : boolean = true;
    currentTask : Object = '';

    /**
     * Toggle the side bar when click on menu button by changing the class
     * @param event 
     */
    toggle(event) {
        this.isToggle = ! this.isToggle;
        console.log("toggle",event);
    }

    /**
     * Create the new task by the name which the user entered 
     * @param event 
     */
    newTask(event) {
        console.log(this.list);
        if(event.target.value) {
            var task = {id:Number, name:String, tasks:[]};
            task.id = this.list.length;
            task.name = event.target.value;
            this.list.push(task);
            event.target.value = "";
        }
    }

    /**
     * Get the current task by clicking on the task name for manipulating the task data
     * @param task 
     */
    getTask(task) {
        this.currentTask = task;
        this.appService.setTask(task);
    }
}
