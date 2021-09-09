import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input() registerMode: boolean;
  @Output() modeChange= new EventEmitter<boolean>();

  registerForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      name: new FormControl('', [Validators.required]),
      position: new FormControl(''),
      address: new FormGroup({
        country: new FormControl(''),
        city: new FormControl('')
      })     
    })
  }

  

  submitRegistration() {
    if(this.registerForm.valid) {            
      const formData = {...this.registerForm.value}
      console.log(formData)
      this.registerForm.reset();
    }
  }

  switchMode() {
    this.registerMode = !this.registerMode;
    this.modeChange.emit(this.registerMode);
  }
}
