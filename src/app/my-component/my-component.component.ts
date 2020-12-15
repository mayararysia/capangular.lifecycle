import { AfterContentChecked, 
  AfterContentInit, 
  AfterViewChecked, 
  AfterViewInit, 
  Component, 
  DoCheck, 
  OnChanges, 
  OnDestroy, 
  OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls:['./my-component.component.css']
})
export class MyComponentComponent implements 
  OnChanges, 
  OnInit,
  DoCheck, AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit,
  AfterViewChecked, OnDestroy {

  @Input() valorInicial: number = 10;

  constructor() { 
    this.log('constructor');
  }

  ngOnInit(): void {
    this.log('ngOnChanges');
  }

  ngOnChanges(){
    this.log('ngOnChanges');
  }

  ngAfterContentInit() {
    this.log("ngAfterContentInit");
  }
  ngAfterContentChecked() {
    this.log("ngAfterContentChecked");
  }
  ngAfterViewInit() {
    this.log("ngAfterViewInit");
  }
  ngAfterViewChecked() {
    this.log("ngAfterViewChecked");
  }

  ngDoCheck(){
    this.log('ngDoCheck');
  }

  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  valor: number = 0.0;

  deletarCiclo: boolean = false;

  mudarValor() {
    this.valor++;
  }

  destruirCiclo(){
    this.deletarCiclo = true;
  }

  private log(hook: string){
    console.log(hook);
  }
}
