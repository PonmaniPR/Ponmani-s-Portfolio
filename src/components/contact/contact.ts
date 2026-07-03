import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  loading = false;
  success = false;
  error = false;

  readonly PUBLIC_KEY = 'bcwGXiy27bfAa8BNd';
  readonly SERVICE_ID = 'service_bhrn10d';
  readonly TEMPLATE_ID = 'template_gbunv2a';

  sendEmail(form: NgForm): void {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.success = false;
    this.error = false;

    emailjs
      .send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        {
          name: form.value.name,
          email: form.value.email,
          subject: form.value.subject,
          message: form.value.message,
        },
        this.PUBLIC_KEY,
      )
      .then(() => {
        this.loading = false;
        this.success = true;
        form.resetForm();

        // Hide success message after 5 seconds
        setTimeout(() => {
          this.success = false;
        }, 5000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);

        this.loading = false;
        this.error = true;

        // Hide error message after 5 seconds
        setTimeout(() => {
          this.error = false;
        }, 5000);
      });
  }
}
