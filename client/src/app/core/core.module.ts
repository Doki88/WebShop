import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [NavBarComponent],
  imports: [CommonModule],
  exports: [NavBarComponent],
})
export class CoreModule {}
