import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfissionaisService } from '../services/profissionais.service';

@Component({
  selector: 'app-cadastro-profissionais',
  templateUrl: './cadastro-profissionais.component.html',
  styleUrls: ['./cadastro-profissionais.component.css']
})
export class CadastroProfissionaisComponent implements OnInit {

  //inicializando os serviços do componente
  constructor(private profissionaisService : ProfissionaisService) { }

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
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(200)
    ]),

  });

  get form() : any {
    return this.formCadastroProfissional.controls;
  }

  onSubmit() : void{
    //gravando os dados em memória
    this.profissionaisService.addProfissional(this.formCadastroProfissional.value)

    //limpando os campos do formulário
    this.formCadastroProfissional.reset();

    //mensagem básica de sucesso
    window.alert('Profissional cadastrado com sucesso!')
  }

}
