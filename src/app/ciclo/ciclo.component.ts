import { AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  Input, 
  OnChanges, 
  OnDestroy, 
  OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnChanges, OnInit, 
    DoCheck, AfterContentInit, AfterContentChecked, 
    AfterViewInit, AfterViewChecked, OnDestroy {
  
      @Input() valorInicial: number = 10;
  
  constructor() {
    this.log("CicleComponent:Constructor");
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
  }
  
  ngOnChanges() {
    this.log("CicloComponent:OnChanges");
  }
  ngOnInit() {
    this.log("CicloComponent:OnInit");
  }
  ngDoCheck() {
    this.log("CicloComponent:DoCheck");
  }
  ngAfterContentInit() {
    this.log("CicloComponent:AfterContentInit");
  }
  ngAfterContentChecked() {
    this.log("CicloComponent:AfterContentChecked");
  }
  ngAfterViewInit() {
    this.log("CicloComponent:AfterViewInit");
  }
  ngAfterViewChecked() {
    this.log("CicloComponent:AfterViewChecked");
  }
  ngOnDestroy() {
    this.log("CicloComponent:OnDestroy");
  }
  
  private log(str: string) {
    console.log(str);
  }
  
}
