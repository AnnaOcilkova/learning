import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { UserDTO } from 'src/app/model/userDTO';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  @Input() data: UserDTO = { firstName: '', lastName: '', userName: '', password: '', email:''};
  @Output() onSubmitE = new EventEmitter<UserDTO>();

  submitForm(user: UserDTO) {
    this.onSubmitE.emit(user);
    document.getElementById('closeButton').click()
  }
}
