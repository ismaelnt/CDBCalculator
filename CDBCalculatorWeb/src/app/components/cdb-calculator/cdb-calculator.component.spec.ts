import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CdbCalculatorComponent } from './cdb-calculator.component';
import { CdbService } from '../../services/cdb.service';
import { of } from 'rxjs';

describe('CdbCalculatorComponent', () => {
  let component: CdbCalculatorComponent;
  let fixture: ComponentFixture<CdbCalculatorComponent>;
  let cdbService: jasmine.SpyObj<CdbService>;

  beforeEach(async () => {
    const cdbServiceSpy = jasmine.createSpyObj('CdbService', ['calculateCDB']);

    await TestBed.configureTestingModule({
      declarations: [CdbCalculatorComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: CdbService, useValue: cdbServiceSpy },
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CdbCalculatorComponent);
    component = fixture.componentInstance;
    cdbService = TestBed.inject(CdbService) as jasmine.SpyObj<CdbService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form when inputs are valid', () => {
    component.cdbForm.controls['initialValue'].setValue(1000);
    component.cdbForm.controls['months'].setValue(12);
    expect(component.cdbForm.valid).toBeTrue();
  });

  it('should have an invalid form when inputs are invalid', () => {
    component.cdbForm.controls['initialValue'].setValue(null);
    component.cdbForm.controls['months'].setValue(null);
    expect(component.cdbForm.invalid).toBeTrue();
  });

  it('should call calculateCDB and set result when form is valid', () => {
    const mockResponse = { grossValue: 1123.08, netValue: 1098.46 };
    cdbService.calculateCDB.and.returnValue(of(mockResponse));

    component.cdbForm.controls['initialValue'].setValue(1000);
    component.cdbForm.controls['months'].setValue(12);
    component.onSubmit();

    expect(cdbService.calculateCDB).toHaveBeenCalledWith({
      initialValue: 1000,
      months: 12,
    });
    expect(component.result).toEqual(mockResponse);
  });
});
