import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../app/welcome/welcome.component';
import { CharDesignComponent } from '../app/char-design/char-design.component';
import { StoryComponent } from '../app/story/story.component';

const appRoutes: Routes = [ 
    {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'character',
        component: CharDesignComponent
      },
      {
        path: 'story/:id',
        component: StoryComponent
      }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);