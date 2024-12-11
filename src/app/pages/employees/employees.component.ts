import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  isDetailVisible = false;

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  onOutletLoaded(): void {
    this.isDetailVisible = true;
    this.cdr.detectChanges();
  }
}
