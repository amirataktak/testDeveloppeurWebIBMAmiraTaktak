import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon'; 

@NgModule({
  imports: [CommonModule, MatButtonModule,MatToolbarModule, MatSidenavModule, MatListModule,MatIconModule],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule,MatIconModule],
})
export class CustomMaterialModule { }
