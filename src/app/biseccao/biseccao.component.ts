import {Component, OnInit, AfterContentInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-biseccao',
  templateUrl: './biseccao.component.html',
  styleUrls: ['./biseccao.component.css']
})
export class BiseccaoComponent implements OnInit,AfterContentInit {





  ngAfterContentInit(): void {
    this.input = this.formGroup.controls['varA']
    this.input2 = this.formGroup.controls['varB']
  }

  input: any
  input2: any

  formGroup: FormGroup;


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
      varA: this.formBuilder.control('',Validators.required),
      varB: this.formBuilder.control('',Validators.required),

    })
  }

  hasSucess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }


  hasSucess2(): boolean{
    return this.input2.valid && (this.input2.dirty || this.input2.touched)
  }

  hasError():boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }


  hasError2():boolean{
    return this.input2.invalid && (this.input2.dirty || this.input2.touched)
  }


}
