import { Injectable } from '@angular/core';
import { _ParseAST } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private _filmes: Filme[] = [];

  constructor() {
    const _temp = localStorage.getItem('filmes');
    this._filmes = _temp ? JSON.parse(_temp) : [];
  }

  getFilmes(): Filme[] {
    return this._filmes;
  }

  getUmFilme(index): Filme {
    return this._filmes[index];
  }

  addFilme(filme: Filme) {
    this._filmes.push(filme);
    this.saveLocal();
  }

  saveFilme(filme: Filme, index: number) {
    this._filmes[index] = filme;
    this.saveLocal();
  }

  private saveLocal() {
    localStorage.setItem('filmes', JSON.stringify(this._filmes));
  }

}

export class Filme {
  nome: string;
  setor: string;
  imagem: string;
  votos?: number = 0;

  constructor(_nome: string, _setor: string, _imagem: string) {
    this.nome = _nome;
    this.setor = _setor;
    this.imagem = _imagem;
  }
}

export class filmeSite {
  name: Name;
  dob: any;
  registered: any;
  id: any;
  picture: any;
}

export class Name {
  title?: string;
  first?: string;
  last?: string;
}