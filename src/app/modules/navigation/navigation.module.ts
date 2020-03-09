import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserComponent } from './components/user/user.component';
import { CategoryComponent } from './components/category/category.component';
import { SiderbarComponent } from './components/shared/siderbar/siderbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';

@NgModule({
  declarations: [
      NavigationComponent, 
      UserComponent, 
      CategoryComponent, 
      SiderbarComponent, 
      FooterComponent, 
      HeaderComponent
    ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class NavigationModule { }
