import { Component, ViewChild } from '@angular/core'; 
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(SideBarComponent) child;

  title = 'todo';
  todolist : Object[] = [];
}