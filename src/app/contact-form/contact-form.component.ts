import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Contact } from '../interface/contact';
import { CommonModule } from '@angular/common';
import { ContactService } from '../service/contact.service';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  standalone: true,
})
export class ContactFormComponent implements OnInit {
  @Output() newContact = new EventEmitter<void>();
  @Input() contact: Contact | null = null;
  editMode = false;
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: ContactService) {}

  ngOnInit(): void {
    if (this.contact) {
      this.editMode = true;
    }
    this.contactForm = this.fb.group({
      firstName: [this.contact?.firstName || '', Validators.required],
      lastName: [this.contact?.lastName || '', Validators.required],
      email: [
        this.contact?.email || '',
        [Validators.required, Validators.email],
      ],
      phone: [this.contact?.phone || '', Validators.required],
      company: [this.contact?.company || ''],
    });
  }

  onCancel(): void {
    this.newContact.emit();
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        id: Date.now(),
        ...this.contactForm.value,
      };
      if (this.editMode) {
        newContact.id = this.contact!.id;
        this.service.updateContact(newContact);
        this.newContact.emit();
      } else {
        newContact.id = Date.now();
        this.service.addContact(newContact);
        this.newContact.emit();
      }

      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
