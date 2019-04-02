import { Component, OnInit } from '@angular/core';
import { SiteService, Filme, filmeSite } from '../site.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss'],
})
export class FilmesComponent implements OnInit {

  filmes: Filme[] = [];

  constructor(
    private cands: SiteService, 
    private meuRouter: Router,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.loadFilmes();
  }

  cardClick(valor) {
    alert('clicou em: '+valor.nome);
  }

  loadFilmes() {
    //this.candidatos = this.cands.getCandidatos();
    this.http.get<any>('https://randomuser.me/api/?results=15')
      .subscribe(users => this.populaFilmes(users.results));
  }

  private populaFilmes(results) {
    // this.candidatos = results;
    this.filmes = results.map(filmeSite => ({
      nome: filmeSite.name.first, 
      imagem: filmeSite.picture.large, 
      setor: filmeSite.location.city}
      ));
  }

  navegar() {
    this.meuRouter.navigate(['/site/cadastro']);
  }

}
