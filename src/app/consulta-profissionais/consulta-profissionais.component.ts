import { Component, OnInit } from '@angular/core';
import { Profissional } from '../models/profissional.model';
import { ProfissionaisService } from '../services/profissionais.service';

@Component({
  selector: 'app-consulta-profissionais',
  templateUrl: './consulta-profissionais.component.html',
  styleUrls: ['./consulta-profissionais.component.css']
})
export class ConsultaProfissionaisComponent implements OnInit {

  constructor(private profissionalService : ProfissionaisService) { }

  dadosProfissional : Profissional [] = [];

  ngOnInit(): void {
    this.dadosProfissional = this.profissionalService.getProfissional();

  }  

}
