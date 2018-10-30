import { Component } from '@angular/core';
import { Story } from '../story.model';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent{

stories: Story[] = [
  new Story("../../assets/img/welcome.jpg","../../assets/img/welcome-corn.jpg","link1","link1","one","two","this is maze",1),
  new Story("../../assets/img/welcome.jpg","../../assets/img/welcome-corn.jpg","link1","link1","three","four","this is maze",2),
  new Story("../../assets/img/welcome.jpg","../../assets/img/welcome-corn.jpg","link1","link1","five","six","this is maze",3)
]

}
