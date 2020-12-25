import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  periodicals:any[]=[
      'Bathroom floor',
      'Full window clean', 
      'Lounge chairs',
      'Dining room Chairs',
      'High level Cleaning',
      'Vacant room clean',
      'Carpet steam cleaning',
      'Ceiling fans cleaning',
      'Floor scrubbing',
      'Courtyard'
    ];
  yearlys:any[]=[];
  halfYearlys:any[]=[];
  threeTimeInyears:any[]=[];
  quarterlys:any[]=[];
  sixTimeInyears:any[]=[];
  asRequired:any[]=[];
  hallwaysOnRotations:any[]=[];
  nas:any[]=[];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log('dropped Event', `> dropped '${event.item.data}' into '${event.container.id}'`);
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      console.log('dropped Event', `> dropped '${event.item.data}' into '${event.container.id}'`);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
