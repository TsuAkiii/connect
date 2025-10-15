import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../interface/contact';
import { ContactService } from '../service/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
  standalone: true,
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[] = [];
  selectedContact: Contact | null = null;
  @Output() newContact = new EventEmitter<void>();
  @Output() contactSelected = new EventEmitter<Contact>();

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });
  }

  onAddNewContactClick(): void {
    this.selectedContact = null;
    this.newContact.emit();
  }

  onSelectContact(contact: Contact): void {
    this.selectedContact = contact;
    this.contactSelected.emit(contact);
  }
}
