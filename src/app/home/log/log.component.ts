import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LOGComponent implements OnInit {

    @ViewChild('myForm') form! :NgForm ;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.form)
  }
}
