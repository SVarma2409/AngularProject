import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { Details } from '../deatils.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
 
  @ViewChild('myForm')
  form!: NgForm;
  constructor(private service:ServiceService) { }
  users:Details[] = [];
  
  ngOnInit(): void {
    this.users = this.service.getDetails();  // Call the function to get the data
  }
  

}
