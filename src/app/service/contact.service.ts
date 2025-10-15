import { Injectable } from '@angular/core';
import { Contact } from '../interface/contact';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}
  private photoUrl: string[] = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBn_9lmZ8MBEqNCewFIeSb06_It5-h8Gw3hgkc0IG-RhwzyNtG7ZpOtPnqENvdCC4cUcEGUBoP0HFG-gOmx7L4FAIGYC5Lkz1TcLlP6sVnEJ7x8GTjZxF5p4_8w4pzZn_5JiWAQLXWLMVloc-pwHi0zUpSvdxVkfRgfQvfZ34TcoSGB3tSFKVoIrnrFKoqr2JXSjyCmWikEmmPlCPOVAWlSniB5H6xq03Hc3I4-t9aQItIoN-qUR5dbdDAwtWXbt7FIpgEfBIX9zLI',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDP1a8uC-IJ1-A5vdGOobkr12ddC3G6IVmSEDrWLLz3WO8aO8GXn_iVt7Akb9P1CAaxM2LIDXRR-GT4d62lsvPi2se75MaUMDvIWoQA6IgBVIoUyv4K3puPsOb5jNlafpu5iw2EXxFRmxGkmFwmUgwnY0FQW-b__rd-T6B5TnfgsSOFG9gyMuJAviDoGxYM75jKBBOr7gmgUYoOHXScYWyqNQLRXNas6bzXbrsKJjzkEBu5SB_og5mUlFu4liQ975oWFnXuUf5gJgA',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDDN7cR4ws_yKnAQ0hsIyQ9n3VtE317FSIN06eYzKkc8w1iNAVYXl6ZT4edTwrrzOqwamyK0bZbLdnmWkhwKzPrZIDNWOjI70lsmoNzk3pkSsHeTaZ_2INu0r1eNB04J1o7avH6E7wnCZ04FNDACnHG9PKeeAiPuMli0TLbH1mG88vn_dG7jM5NSo46EJkQyflDf3SPBuQYo8OAdqJfP5ehyg7QavcKYLi_rnWoMR7GkocipRVBCFiIWrOp4pza7im4Mps2ztXVMVM',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBT41OHMIwBJ2K_IK3f3SVhPRRU4q1Jbbj6_Ehvg93cD8iXuLAU0zBX_QpFx-zEoZISc5KiJdQCeIQwPdn8blvImfieFB2G4Kg4QjFVk1NZAj6TqAWTjNQGNyQP5lalAC_elsKdkh5WEkJp5970Nsc9a7p113HoBg0ZEGoJttgpzcssxmWJD78686FPWq2OTPo6XsnF7J4EF1Fqt_dws8GCAGmum--wuZ3vrV_OyuQhbTIS4sOcH8plxlqBzcuQsAp-4jxBMlKOvao',
  ];
  private contacts: Contact[] = [
    {
      id: 1,
      firstName: 'Sophia',
      lastName: 'Clark',
      email: 'sophia.clark@email.com',
      phone: '+1 (555) 123-4567',
      company: 'Innovate Inc.',
      photoUrl: this.photoUrl[Math.floor(Math.random() * this.photoUrl.length)],
    },
    {
      id: 2,
      firstName: 'Liam',
      lastName: 'Evans',
      email: 'liam.evans@email.com',
      phone: '+1 (555) 234-5678',
      photoUrl: this.photoUrl[Math.floor(Math.random() * this.photoUrl.length)],
    },
    {
      id: 3,
      firstName: 'Olivia',
      lastName: 'Green',
      email: 'olivia.green@email.com',
      phone: '+1 (555) 345-6789',
      company: 'Solutions Co.',
      photoUrl: this.photoUrl[Math.floor(Math.random() * this.photoUrl.length)],
    },
    {
      id: 4,
      firstName: 'Noah',
      lastName: 'Hall',
      email: 'noah.hall@email.com',
      phone: '+1 (555) 456-7890',
      company: 'Tech Forward',
      photoUrl: this.photoUrl[Math.floor(Math.random() * this.photoUrl.length)],
    },
    {
      id: 5,
      firstName: 'Emma',
      lastName: 'Knight',
      email: 'emma.knight@email.com',
      phone: '+1 (555) 567-8901',
      photoUrl: this.photoUrl[Math.floor(Math.random() * this.photoUrl.length)],
    },
  ];

  private contactSubject = new BehaviorSubject<Contact[]>(this.contacts);

  getContacts(): Observable<Contact[]> {
    return this.contactSubject.asObservable();
  }

  addContact(contact: Contact): void {
    contact.photoUrl =
      this.photoUrl[Math.floor(Math.random() * this.photoUrl.length)];
    this.contacts.push(contact);
    this.contactSubject.next(this.contacts);
  }

  removeContact(contactId: number): void {
    this.contacts = this.contacts.filter((contact) => contact.id !== contactId);
    this.contactSubject.next(this.contacts);
  }

  updateContact(updatedContact: Contact): void {
    const currentContacts = this.contactSubject.getValue();
    const updatedContacts = currentContacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
    this.contactSubject.next(updatedContacts);
  }
}
