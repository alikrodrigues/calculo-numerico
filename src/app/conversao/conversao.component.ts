import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-conversao',
  templateUrl: './conversao.component.html',
  styleUrls: ['./conversao.component.css']
})
export class ConversaoComponent implements OnInit {

  formGroup: FormGroup;


  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      opcao: this.formBuilder.control(''),
      inicio: this.formBuilder.control('', Validators.required),
      binario: this.formBuilder.control(''),
      octal: this.formBuilder.control(''),
      decimal: this.formBuilder.control(''),
      hexadecimal: this.formBuilder.control('')
    })
  }

}
