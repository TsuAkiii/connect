import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { Contact } from './interface/contact';
import { ContactService } from './service/contact.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    ContactListComponent,
    ContactInfoComponent,
    ContactFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'connect';
  isAddingNewContact = false;
  selectedContact: Contact | null = null;
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
      if (this.selectedContact) {
        this.selectedContact =
          contacts.find((c) => c.id === this.selectedContact!.id) || null;
      }
    });
  }

  handleNewContact(): void {
    this.isAddingNewContact = true;
    this.selectedContact = null;
  }

  cancelNewContact(): void {
    this.isAddingNewContact = false;
  }

  handleContactSelected(contact: Contact): void {
    this.isAddingNewContact = false;
    this.selectedContact = contact;
  }

  handleEditContact(contact: Contact | null): void {
    this.isAddingNewContact = true;
    this.selectedContact = contact;
  }

  handleDeleteContact(contact: Contact | null): void {
    if (contact) {
      this.contactService.removeContact(contact.id);
      this.selectedContact = null;
    }
  }
}
