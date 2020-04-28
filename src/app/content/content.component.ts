import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { MyValidation } from '../validators/custom.validators';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  @Input() products;
  @Output() buyClicked = new EventEmitter();

  title = 'Ratnesh';

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   email: new FormControl('', [MyValidation.cannotContainSpace]),
    //   password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   address: new FormGroup({
    //     city: new FormControl(),
    //     country: new FormControl()
    //   }),
    //   companies: new FormArray([])
    // })

    this.form = this.fb.group({
      email: ['', [MyValidation.cannotContainSpace]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
      address: this.fb.group({
        city: ['', Validators.required],
        country: ['', Validators.required]
      }),
      companies: this.fb.array([])
    }, { validators: [ MyValidation.matchPassword ] })
  }

  removeEmailValidator() {
    this.form.get('email').setValidators([]);
    this.form.get('email').updateValueAndValidity();
  }

  addCompany() {
    let company = new FormGroup({
      title: new FormControl(),
      designation: new FormControl()
    });
    (this.form.get('companies') as FormArray).push(company);
  }

  removeCompany(i) {
    (this.form.get('companies') as FormArray).removeAt(i);
  }

  get companies() {
    return (this.form.get('companies') as FormArray).controls;
  }

  submit() {
    console.log(this.form);
  }

}
