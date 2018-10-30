import { Injectable } from '@angular/core';
import { Story } from '../app/story.model';
import { stories } from '../app/story/story.component';

@Injectable()
export class StoryService {

  constructor() { }

  getStories(){
  return stories;
}

  goToStoryId(storyId: number) {
    for(var i=0; i<stories.length;i++) {
      if((stories[i].id === storyId)){
        return stories[i];
      }

    }
  }
}
