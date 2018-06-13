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
      sinal4: this.formBuilder.control('+'),
      variavel3: this.formBuilder.control('1'),
      variavel4: this.formBuilder.control('0'),
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
    let variavel4: number = Number(this.formGroup.controls['sinal4'].value + this.formGroup.controls['variavel4'].value);

    
    

    for (let i = 0; i < 8; i++) {
    x = (Number(a) + Number(b)) / 2;
    
    //fxk
    let result: number = Number(this.formGroup.controls['sinal'].value + Math.pow((
      variavel * x), expo)) + 
      Number(this.formGroup.controls['sinal2'].value + Math.pow((
        variavel2 * x), expo2)) +
      Number(this.formGroup.controls['sinal3'].value +(
          variavel3 * x)) + variavel4;
      
      fxk = Number(result.toPrecision(6));      


      //f(a)

      let result1: number = Number(this.formGroup.controls['sinal'].value + Math.pow((
        variavel * a), expo)) +
        Number(this.formGroup.controls['sinal2'].value + Math.pow((
          variavel2 * a), expo2)) +
        Number(this.formGroup.controls['sinal3'].value + (
          variavel3 * a)) + variavel4;

      fa = Number(result1.toPrecision(6));

      if (i == 0) {
        this.objectTable.push(new ObjectTable(i, this.formGroup.controls['varA'].value, this.formGroup.controls['varB'].value, x, fxk, fa));
      } else {
        this.objectTable.push(new ObjectTable(i, a, b, x, fxk, fa));
      }
      if (fa * fxk > 0) {
        a = x;
      } else {
        b = x;
      }
    } 
  }
}
