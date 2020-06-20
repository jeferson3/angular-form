import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {

  profileForm;

  constructor(private fb: FormBuilder) {

    this.profileForm = this.fb.group({

      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required]]
    })

  }
  sub() {
    console.log(this.profileForm);
    this.profileForm.reset();

  }
  ngOnInit() { }

}
