import { NgModule } from '@angular/core';

import { SiteRoutingModule } from './SiteRoutingModule';
import { FilmesComponent } from './filmes/filmes.component';
import { GeralModule } from '../geral/geral.module';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [
    FilmesComponent,
    CadastroComponent
  ],
  imports: [
    GeralModule,
    SiteRoutingModule
  ]
})
export class SiteModule { }
