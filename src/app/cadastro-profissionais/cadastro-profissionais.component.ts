import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-profissionais',
  templateUrl: './cadastro-profissionais.component.html',
  styleUrls: ['./cadastro-profissionais.component.css']
})
export class CadastroProfissionaisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formCadastroProfissional = new FormGroup ({

    nome : new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(150),

    ]),
    telefone : new FormControl('', [
      Validators.required,
      Validators.maxLength(11)
    ]),
    email : new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(150),
    ]),
    cpf : new FormControl('', [
      Validators.required,
      Validators.maxLength(14)
    ]),
    observacao : new FormControl('', [
      
    ]),

  });

  get form() : any {
    return this.formCadastroProfissional.controls;
  }

  onSubmit() : void{
    console.log(this.formCadastroProfissional.value);

  }

}
