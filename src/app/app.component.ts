import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [
    { title: 'Tree', imageUrl: 'assets/tree.jpeg', userName: 'nature', content: 'Saw this awesome tree during my hike today.'},
    { title: 'Snowy Mtn', imageUrl: 'assets/mountain.jpeg', userName: 'mountainLover', content: 'Look at Snowy Mountain.'},
    { title: 'Mtn Biking', imageUrl: 'assets/biking.jpeg', userName: 'bikingLad', content: 'I did some biking today.'},
  ];
  
}
