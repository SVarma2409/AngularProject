import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Details } from 'src/app/deatils.model';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LOGComponent implements OnInit {

  constructor(private service: ServiceService) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newDetails: Details = {
        name: form.value.name,
        email: form.value.email,
        password: form.value.password,
        cpassword: form.value.cpassword
      };
      this.service.addDetails(newDetails);
      console.log(this.service.getDetails());
    }
  }

  ngOnInit(): void {}
}
