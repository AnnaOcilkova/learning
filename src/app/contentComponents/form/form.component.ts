import { UserDTO } from '../../model/userDTO';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() onSubmit = new EventEmitter<UserDTO>();
  @Input() data: any;
  @Input() parentName: string;
  profileForm: FormGroup;
  newUser: any;

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: new FormControl(this.data.firstName, [Validators.required]),
      lastName: new FormControl(this.data.lastName, [
        Validators.required,
        Validators.minLength(2),
        // TODO: add custom validator
        // customValidator(),
      ]),
      userName: new FormControl(this.data.userName),
      password: new FormControl(this.data.password),
      email: new FormControl(this.data.email),
    });
  }

  constructor(private fb: FormBuilder) {}

  get lastName() {
    return this.profileForm.get('lastName');
  }

  onSubmitForm() {
    this.onSubmit.emit(this.profileForm.value);
    this.profileForm.reset();
  }

  addDefaultUser() {
    const user = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'j@j.com',
      userName: 'john',
      password: 'testTest1.',
    };
    this.onSubmit.emit(user);
  }
}
