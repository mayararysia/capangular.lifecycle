import { 
  Component, 
  AfterContentChecked, 
  AfterContentInit,
  AfterViewChecked, 
  AfterViewInit ,
  DoCheck, 
  OnChanges, 
  OnDestroy, 
  OnInit, 
  Input, 
  SimpleChanges
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})

export class AppComponent implements OnChanges, OnInit, DoCheck,
AfterContentInit, AfterContentChecked,AfterViewInit,
AfterViewChecked,OnDestroy {
  
  displayChild: boolean=false;
  valor: number = 5;
  deletarCiclo: boolean = false;
  showOff: boolean = false;

  @Input() valorStr: string = ""


  constructor() {
    this.log("AppComponent:Constructor");
  }
  
  toggle() {
    this.displayChild=!this.displayChild;
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
  }

  ngOnChanges() {
    this.log("AppComponent:OnChanges");
  }
  ngOnInit() {
    this.log("AppComponent:OnInit");
  }
  ngDoCheck() {
    this.log("AppComponent:DoCheck");
  }
  ngAfterContentInit() {
    this.log("AppComponent:AfterContentInit");
  }
  ngAfterContentChecked() {
    this.log("AppComponent:AfterContentChecked");
  }
  ngAfterViewInit() {
    this.log("AppComponent:AfterViewInit");
  }
  ngAfterViewChecked() {
    this.log("AppComponent:AfterViewChecked");
  }
  ngOnDestroy() {
    this.log("AppComponent:OnDestroy");
  }
  
  private log(str: string) {
    console.log(str);
  }
  
  mudarValor() {
    this.valor++;
  }

  exibirTexto() {
    if( this.showOff ) {
      this.showOff = false;
      this.valorStr = "Valor não exibido."
    }
    else { 
      this.showOff = true;
      this.valorStr = "Valor exibido."
    }
  }

  destruirCiclo() {
    
    this.deletarCiclo = true;
  }
  
}
