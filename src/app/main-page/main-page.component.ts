import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { Details } from '../deatils.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  userlog: Details[]=[];
 constructor(private router:Router){

 }
  
  ngOnInit(): void { 

    if (history.state.data && Array.isArray(history.state.data)) {
      this.userlog = history.state.data;
    } else {
      console.error('No valid data found in state');
      this.router.navigate(['/home/log']);
  


}
  }}
