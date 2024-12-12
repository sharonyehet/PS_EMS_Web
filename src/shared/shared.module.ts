import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DigitOnlyModule } from '@uiowa/digit-only';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { EnumToArrayPipe } from './pipes/enumToArray.pipe';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, EnumToArrayPipe],
  imports: [ReactiveFormsModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    ReactiveFormsModule,
    RouterModule,
    MatTableModule,
    MatProgressBarModule,
    MatIconModule,
    MatPaginatorModule,
    MatButtonModule,
    DigitOnlyModule,
    MatDatepickerModule,
    MatSelectModule,
    MatRadioModule,
    EnumToArrayPipe
  ],
})
export class SharedModule {}
