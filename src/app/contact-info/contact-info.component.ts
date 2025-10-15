import {
  Component,
  EventEmitter,
  Input,
  input,
  OnInit,
  Output,
} from '@angular/core';
import { Contact } from '../interface/contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-info',
  imports: [CommonModule],
  templateUrl: './contact-info.component.html',
  styleUrl: './contact-info.component.scss',
  standalone: true,
})
export class ContactInfoComponent implements OnInit {
  @Input() contact: Contact | null = null;
  @Output() contactinfo = new EventEmitter<Contact | null>();
  @Output() deleteContact = new EventEmitter<Contact | null>();

  ngOnInit(): void {
    console.log(this.contact);
  }

  editContact(): void {
    this.contactinfo.emit(this.contact);
  }

  removeContact(): void {
    this.deleteContact.emit(this.contact);
  }
}
