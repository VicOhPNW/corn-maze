import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../app/welcome/welcome.component';
import { CharDesignComponent } from '../app/char-design/char-design.component';

const appRoutes: Routes = [ 
    {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'character',
        component: CharDesignComponent
      }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);