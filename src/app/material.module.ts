//Module to import components from Angular Material
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';





@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressBarModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressBarModule,
    MatCardModule
  ]
})
export class MaterialModule { }
