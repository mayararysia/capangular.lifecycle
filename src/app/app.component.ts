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
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent implements 
OnChanges, 
OnInit,
DoCheck, AfterContentInit, 
AfterContentChecked, 
AfterViewInit,
AfterViewChecked, OnDestroy{

  title = 'projeto-life-cycle';
  // valor: number = 0.0;

  // deletarCiclo: boolean = false;

  // mudarValor() {
  //   this.valor++;
  // }

  // destruirCiclo(){
  //   this.deletarCiclo = true;
  // }

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
