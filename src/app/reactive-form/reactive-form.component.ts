import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DisplayComponent } from '../display/display.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  @ViewChild(DisplayComponent) display: DisplayComponent

  loginForm: FormGroup;
  formVal: any;
  userForm: FormGroup;
  valueArr = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
    });

    this.userForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
    });

  }

  get fname() {
    return this.userForm.get('fname')!;
  }

  get lname() {
    return this.userForm.get('lname')!;
  }

  get email() {
    return this.userForm.get('email')!;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.formVal = this.loginForm.value;
  }

  valuesOutput(ev) {
    console.log(ev)
    this.display.submit({ data: ev })
  }

  onSubmitVal() {
    let values = this.userForm.value;
    let valArr = []
    Object.keys(values).forEach((el) => {
      valArr.push(values[el]);
    });

    console.log(valArr)
    this.valueArr.push(this.userForm.value);
  }

}
