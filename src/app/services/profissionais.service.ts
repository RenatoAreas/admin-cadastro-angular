import { Injectable } from '@angular/core';
import { Profissional } from '../models/profissional.model';

@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

  profissionais : Profissional [] = [];



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
