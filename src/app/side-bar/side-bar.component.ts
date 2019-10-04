import { Component, OnInit, ElementRef} from '@angular/core';

@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    isToggle : boolean = true;
    toggle(event) {
        this.isToggle = ! this.isToggle;
        console.log("toggle",event);
    }
    list : Object[] = [];
    

    newList(event) {
        if(event.target.value) {
            var task = {id:Number, name:String, tasks:[Object]};
            task.id = this.list.length;
            task.name = event.target.value;
            this.list.push(task);
            event.target.value = "";
            console.log(task.name);
            console.log(this.list);
        }
    }
}
