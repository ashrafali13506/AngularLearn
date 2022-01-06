import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateGuard } from './activate.guard';
import { CanactivatechildGuard } from './canactivatechild.guard';
import { demoComponent } from './components/demo/demo.component';

import { SearchComponent } from './components/search/search.component';
import { DeactivateGuard } from './deactivate.guard';
import { RoutertestComponent } from './routertest/routertest.component';

const routes: Routes = [


  {path:'search',component:SearchComponent,
  canActivateChild:[CanactivatechildGuard],


children:[{
  path:'test',
  component:demoComponent
}]},
]
//  {path:'test/:id/:username',component:demoComponent}

// canActivate:[ActivateGuard]}






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
