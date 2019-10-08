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

    isToggle : boolean = true;
    currentTask : Object = '';
    toggle(event) {
        this.isToggle = ! this.isToggle;
        console.log("toggle",event);
    }

    newList(event) {
        console.log(this.list);
        if(event.target.value) {
            var task = {id:Number, name:String, tasks:[]};
            task.id = this.list.length;
            task.name = event.target.value;
            this.list.push(task);
            event.target.value = "";
            console.log(task.name);
            console.log(this.list);
        }
    }

    getTask(task) {
        //console.log(this.currentTask);
        this.currentTask = task;
        this.appService.setTask(task);
        console.log(this.appService.task);
//        this.task = task;
    }
}
