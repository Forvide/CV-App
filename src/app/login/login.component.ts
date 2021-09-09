import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() registerMode: boolean;
  @Output() modeChange = new EventEmitter<boolean>();

  loginForm: FormGroup;
 
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required])
    })    
  }  

  submitLogin() {
    if(this.loginForm.valid) {      
      const formData = {...this.loginForm.value}
      console.log(formData)
      this.loginForm.reset();
    }
  }

  switchMode() {
    this.registerMode = !this.registerMode;
    this.modeChange.emit(this.registerMode);
  }
}
