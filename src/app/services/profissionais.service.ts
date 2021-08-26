import { Injectable } from '@angular/core';
import { Profissional } from '../models/profissional.model';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

  profissionais : Profissional [] = [
    {
      nome : 'Renato Areas',
      email : 'rsareas93@gmail.com',
      cpf : '145.313.569.-89',
      telefone : '(21) 99635-7845',
      observacao : 'Lotado no setor de back-end'
    },
    {
      nome : 'Caroline Ferreira',
      email : 'caroline@gmail.com',
      cpf : '145.458.375.-00',
      telefone : '(21) 99658-9856',
      observacao : 'Lotado no setor de mísia social'
    },
    {
      nome : 'Igor Felix',
      email : 'igor@gmail.com',
      cpf : '145.313.457.-63',
      telefone : '(21) 98574-9658',
      observacao : 'Lotado no setor de Juridico'
    },
    {
      nome : 'Antonio Cezar',
      email : 'cezar@gmail.com',
      cpf : '145.552.003.-63',
      telefone : '(21) 98574-5810',
      observacao : 'Lotado no setor de Financeiro'
    },
    
  ];

  constructor() { }

  //função para capturar o profissional da tela de cadastro
  //e guardando em memória
  addProfissional(item : Profissional) : void{
    //adicionando na lista
    this.profissionais.push(item);
  }
  
  //função que retorna todos os
  //profissionalda lista 
  getProfissional() : Profissional [] {

    return this.profissionais;

  }

}
