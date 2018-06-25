import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ObjectTableNewton } from './object-table-newton';

@Component({
  selector: 'app-newton-raphson',
  templateUrl: './newton-raphson.component.html',
  styleUrls: ['./newton-raphson.component.css']
})
export class NewtonRaphsonComponent implements OnInit {

  formGroup: FormGroup;

  objectTable: ObjectTableNewton[] = [];

  x: number = 0;
  fx: number = 0;
  fxk1: number = 0;
  erro: number = 0;
  variavel: number;
  expo: number;
  expo2: number;
  variavel2: number;
  variavel3: number;

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
      intervalo: this.formBuilder.control('', Validators.required),
      intervalo2: this.formBuilder.control('', Validators.required),

    });
  }


  calcular() {
    this.objectTable = [];
    let intervalo = Number(this.formGroup.controls['intervalo'].value);
    let intervalo2 = Number(this.formGroup.controls['intervalo2'].value);
    this.x = 0;
    this.fx = 0;
    this.fxk1 = 0;
    this.variavel = Number.parseFloat(this.formGroup.controls['sinal'].value + this.formGroup.controls['variavel'].value);
    this.expo = Number(this.formGroup.controls['expo'].value);
    this.expo2 = Number(this.formGroup.controls['expo2'].value);
    this.variavel2 = Number.parseFloat(this.formGroup.controls['sinal2'].value + this.formGroup.controls['variavel2'].value);
    this.variavel3 = Number(this.formGroup.controls['sinal3'].value + this.formGroup.controls['variavel3'].value);

    if (this.calculaDerivada(intervalo) > this.calculaDerivada(intervalo2)) {
     this.x = intervalo;
    } else {
      this.x = intervalo2;
    }

    for (let i = 0; i < 8; i++) {

    //F(x)
    this.fx = this.calculaFuncao(this.x);

    //F(xk1)
    this.fxk1 = this.x - (this.fx / this.calculaDerivada(this.x));

    //Error
    this.erro = this.x - this.fx;

    if(this.erro < 0){
      this.erro = this.erro * -1;
    }

    this.objectTable.push(new ObjectTableNewton(i, Number(this.x.toFixed(6)),
      Number(this.fx.toFixed(6)), Number(this.fxk1.toFixed(6)), Number(this.erro.toFixed(6))));

    //X
    this.x = this.fxk1;
  }

  }

  calculaDerivada(intervalo: number): number {
    let result: number = (this.expo * this.variavel) *
      Math.pow(intervalo, this.expo - 1)
      + (this.expo2 * this.variavel2) *
      Math.pow(intervalo, this.expo2 - 1);
      return result;
  }

  calculaFuncao(n: number): number {
    const result1: number = Math.pow((
      this.variavel * n), this.expo) +
       Math.pow((
        this.variavel2 * n), this.expo2) +
        this.variavel3;
    return result1;
  }

}
