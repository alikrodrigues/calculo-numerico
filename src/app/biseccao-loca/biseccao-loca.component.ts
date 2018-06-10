import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ObjectTable } from '../biseccao/object-table';

@Component({
  selector: 'app-biseccao-loca',
  templateUrl: './biseccao-loca.component.html',
  styleUrls: ['./biseccao-loca.component.css']
})
export class BiseccaoLocaComponent implements OnInit, AfterContentInit {


  input: any;
  input2: any;
  objectTable: ObjectTable[] = [];


  formGroup: FormGroup;

  ngAfterContentInit(): void {
    this.input = this.formGroup.controls['varA'];
    this.input2 = this.formGroup.controls['varB'];
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      sinal: this.formBuilder.control('+'),
      variavel: this.formBuilder.control('1'),
      x: this.formBuilder.control('x'),
      expo: this.formBuilder.control('2'),
      x2: this.formBuilder.control('x'),
      expo2: this.formBuilder.control('2'),
      sinal2: this.formBuilder.control('-'),
      variavel2: this.formBuilder.control('1'),
      sinal3: this.formBuilder.control('+'),
      variavel3: this.formBuilder.control('1'),
      varA: this.formBuilder.control('', Validators.required),
      varB: this.formBuilder.control('', Validators.required),

    });
  }


  calcular() {
    let a  = this.formGroup.controls['varA'].value;
    let b = this.formGroup.controls['varB'].value;
    let x : number = 0;
    let fxk : number = 0;
    let fa : number = 0;
    let variavel: number = Number(this.formGroup.controls['variavel'].value);
    let expo: number = Number(this.formGroup.controls['expo'].value);
    let expo2: number =  Number(this.formGroup.controls['expo2'].value);
    let variavel2: number = Number(this.formGroup.controls['variavel2'].value);
    let variavel3: number = Number(this.formGroup.controls['variavel3'].value);
  
    if(this.formGroup.controls['sinal'].value=='-'&& this.formGroup.controls['sinal2'].value =='-'&&
    this.formGroup.controls['sinal3'].value=='-'){
    for(let i: number = 0;i<8;i++) {
      x = (Number(a)+Number(b))/2;
      let result1 = Math.pow( x, expo);
      let aux: number = variavel * result1;
      let result2 = Math.pow(x, expo2);
      let aux2 =  variavel2 * result2;
      fxk = Number((result1 * Number(resultEuler.toPrecision(6))
      - variavel3).toPrecision(6));



      //f(a)

      let aux2: number = Number(a) - variavel
      let result3 = Math.pow(aux2, expo);
      let result4 = Math.pow(Number(a), expo2) - variavel2;
      let resultEuler2 = Math.exp(result4)
      fa =Number((result3 * Number(resultEuler2.toPrecision(6))- variavel3).toPrecision(6));




      if(i==0){
        this.objectTable.push(new ObjectTable(i,this.formGroup.controls['varA'].value,this.formGroup.controls['varB'].value,x,fxk,fa));
      }else{
        this.objectTable.push(new ObjectTable(i,a,b,x,fxk,fa));
      }
      if(fa*fxk>0){
        a = x;
      }else{
        b=x;
      }
    }


  }
  
  }

}
