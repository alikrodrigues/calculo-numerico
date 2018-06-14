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

  a: any;
  b: any;
  x: number = 0;
  fxk: number = 0;
  fa: number = 0;
  variavel: number;
  expo: number;
  expo2: number;
  variavel2: number;
  variavel3: number;
  variavel4: number 


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

  hasSucess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }


  hasSucess2(): boolean {
    return this.input2.valid && (this.input2.dirty || this.input2.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }

  hasError2(): boolean {
    return this.input2.invalid && (this.input2.dirty || this.input2.touched)
  }


  calcular() {
    this.objectTable = [];
    this.a  = this.formGroup.controls['varA'].value;
    this.b = this.formGroup.controls['varB'].value;
    this.x = 0;
    this.fxk = 0;
    this.fa  = 0;
    this.variavel = Number(this.formGroup.controls['variavel'].value);
    this.expo = Number(this.formGroup.controls['expo'].value);
    this.expo2 =  Number(this.formGroup.controls['expo2'].value);
    this.variavel2 = Number(this.formGroup.controls['variavel2'].value);
    this.variavel3 = Number(this.formGroup.controls['variavel3'].value);
    this.variavel4 = Number(this.formGroup.controls['sinal4'].value + this.formGroup.controls['variavel4'].value);

    for (let i = 0; i < 8; i++) {
    this.x = (Number(this.a) + Number(this.b)) / 2;

    //fxk
    this.fxk = Number.parseFloat(this.calculaFuncao(this.x).toFixed(6));

    //f(a)
    this.fa = Number.parseFloat(this.calculaFuncao(this.a).toFixed(6));

    if (i == 0) {
    this.objectTable.push(new ObjectTable(i, this.formGroup.controls['varA'].value,
     this.formGroup.controls['varB'].value, this.x, this.fxk, this.fa));
    } else {
      this.objectTable.push(new ObjectTable(i, this.a, this.b, this.x, this.fxk, this.fa));
    }


    console.log(Number.parseFloat((this.fa * this.fxk).toFixed(6)).toFixed(6));

    if (Number.parseFloat((this.fa * this.fxk).toFixed(6)) > 0) {
      this.a = this.x;
    } else {
      this.b = this.x;
    }
   } 
 }

  calculaFuncao(n: number): number {
    const result1: number = Number(this.formGroup.controls['sinal'].value + Math.pow((
      this.variavel * n), this.expo)) +
      Number(this.formGroup.controls['sinal2'].value + Math.pow((
        this.variavel2 * n), this.expo2)) +
      Number(this.formGroup.controls['sinal3'].value + (
        this.variavel3 * n)) + this.variavel4;
        return result1;
  }

}
