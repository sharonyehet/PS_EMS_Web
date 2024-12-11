import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [ReactiveFormsModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatProgressBarModule,
    MatIconModule,
  ],
})
export class SharedModule {}
