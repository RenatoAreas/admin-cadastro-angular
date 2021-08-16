import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DashboardPrincipalComponent } from './dashboard-principal/dashboard-principal.component';
import { CadastroProfissionaisComponent } from './cadastro-profissionais/cadastro-profissionais.component';
import { ConsultaProfissionaisComponent } from './consulta-profissionais/consulta-profissionais.component';

import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  { path : 'dashboard-principal', component : DashboardPrincipalComponent},
  { path : 'cadastro-profissional', component : DashboardPrincipalComponent},
  { path : 'consulta-profissional', component : DashboardPrincipalComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardPrincipalComponent,
    CadastroProfissionaisComponent,
    ConsultaProfissionaisComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
