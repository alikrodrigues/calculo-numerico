import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ConversaoService} from "./conversao.service";

@Component({
  selector: 'app-conversao',
  templateUrl: './conversao.component.html',
  styleUrls: ['./conversao.component.css']
})
export class ConversaoComponent implements OnInit {

  formGroup: FormGroup;
  searchControl: FormControl

  constructor(private formBuilder: FormBuilder,
              private service: ConversaoService) {}
  ngOnInit() {
    this.searchControl = this.formBuilder.control('', Validators.required);
    this.formGroup = this.formBuilder.group({
      opcao: this.formBuilder.control('2'),
      inicio: this.searchControl,
      binario: this.formBuilder.control(''),
      octal: this.formBuilder.control(''),
      decimal: this.formBuilder.control(''),
      hexadecimal: this.formBuilder.control('')
    })

    this.searchControl.valueChanges.subscribe(searchTerm => {


      switch (this.formGroup.controls['opcao'].value){
        case '2':
          this.formGroup.controls['octal'].setValue(this.service.binarioToOctal(searchTerm));
          this.formGroup.controls['decimal'].setValue(this.service.binarioToDecimal(searchTerm));
          this.formGroup.controls['hexadecimal'].setValue(this.service.binarioToHexa(searchTerm));
          break;
        case '8':
          this.formGroup.controls['binario'].setValue(this.service.octalToBinario(searchTerm));
          this.formGroup.controls['decimal'].setValue(this.service.octalToDecimal(searchTerm));
          this.formGroup.controls['hexadecimal'].setValue(this.service.octalToHexa(searchTerm));
          break;
        case '10':
          this.formGroup.controls['octal'].setValue(this.service.decimalToOctal(searchTerm));
          this.formGroup.controls['binario'].setValue(this.service.decimalToBinario(searchTerm));
          this.formGroup.controls['hexadecimal'].setValue(this.service.decimalToHexa(searchTerm));
          break
        case '16':
          this.formGroup.controls['octal'].setValue(this.service.hexadecimalToOctal(searchTerm));
          this.formGroup.controls['decimal'].setValue(this.service.hexadecimalToDecimal(searchTerm));
          this.formGroup.controls['binario'].setValue(this.service.hexadecimalToBinario(searchTerm));
          break;
      }
      if(searchTerm.toString().length == 0){
        this.clearForms();
      }
    })
  }
  clearForms(){
    this.formGroup.controls['hexadecimal'].setValue('');
    this.formGroup.controls['octal'].setValue('');
    this.formGroup.controls['decimal'].setValue('');
    this.formGroup.controls['binario'].setValue('');
  }
}
