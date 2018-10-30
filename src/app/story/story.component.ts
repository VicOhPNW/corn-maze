import { Component, OnInit } from '@angular/core';
import { Story } from '../story.model';
import { StoryService } from '../story.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  providers: [StoryService]
})
export class StoryComponent implements OnInit{

  constructor(private route: ActivatedRoute, private router: Router, private storyService: StoryService) {}

  currentStory: Story;
  id: number;

  ngOnInit(){
    this.route.params.forEach((urlParameters) => {
      console.log(this.storyService.getStories());
      this.id = parseInt(urlParameters['id']);
      console.log(this.id);
      this.currentStory = this.storyService.goToStoryId(this.id);
      console.log(this.currentStory);
    })
    
  }

}

export const stories: Story[] = [
  new Story (
    "../../assets/img/welcome.jpg",
    "../../assets/img/welcome-corn.jpg",
    "/story/2",
    "/story/3",
    "one",
    "two",
    "this is maze",
    1),

  new Story (
    "../../assets/img/welcome.jpg",
    "../../assets/img/welcome-corn.jpg",
    "/story/3",
    "/story/1",
    "three",
    "four",
    "You are gonna die",
    2),

  new Story(
    "../../assets/img/welcome.jpg",
    "../../assets/img/welcome-corn.jpg",
    "/story/2",
    "/story/2",
    "five",
    "six",
    "screeeaaaaammmmmm",
    3)
];
