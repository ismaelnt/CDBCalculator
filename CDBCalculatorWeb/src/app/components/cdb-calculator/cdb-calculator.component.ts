import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CdbService,
  CDBRequest,
  CDBResponse,
} from '../../services/cdb.service';

@Component({
  selector: 'app-cdb-calculator',
  templateUrl: './cdb-calculator.component.html',
  styleUrls: ['./cdb-calculator.component.css'],
})
export class CdbCalculatorComponent {
  cdbForm: FormGroup;
  result: CDBResponse | null = null;

  constructor(private fb: FormBuilder, private cdbService: CdbService) {
    this.cdbForm = this.fb.group({
      initialValue: [null, [Validators.required, Validators.min(0.01)]],
      months: [null, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit(): void {
    if (this.cdbForm.valid) {
      const request: CDBRequest = this.cdbForm.value;
      this.cdbService.calculateCDB(request).subscribe((response) => {
        this.result = response;
      });
    }
  }
}
