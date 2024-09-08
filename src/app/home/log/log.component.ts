import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Details } from 'src/app/deatils.model';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LOGComponent implements OnInit {

  constructor(private service: ServiceService,private router:Router) { }

  userLog :Details[]=[];

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newDetails: Details = {
        name: form.value.name,
        email: form.value.email,
        pass: form.value.password,
        cpass: form.value.cpassword
      }
      

      ;

      this.userLog.push(newDetails);
      this.router.navigate(['/home/log/mainpage'],{state:{data : this.userLog}});
    }
    

  }

  ngOnInit(): void {}
}
