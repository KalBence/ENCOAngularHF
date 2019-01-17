import { NgModule } from '@angular/core';

import { CoreRoutingModule } from './core-routing.module';
import { HomePageComponent } from './pages/home.page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CoreRoutingModule,
    SharedModule
  ]
})
export class CoreModule { }
