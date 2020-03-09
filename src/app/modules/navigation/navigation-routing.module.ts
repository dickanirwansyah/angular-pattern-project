import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CategoryComponent } from './components/category/category.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'user',
        component: UserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
