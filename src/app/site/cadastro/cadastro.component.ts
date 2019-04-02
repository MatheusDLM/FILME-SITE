import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {

  filme: any = {};
  site: SiteService;

  constructor(private local: Location, _site: SiteService) {
    this.site = _site;
  }

  ngOnInit() {}

  cadastrar(meuForm) {
    let _nome = meuForm.value.nome;
    let _setor = meuForm.value.setor;
    
    if (_nome && _setor) {
      
      this.site.addFilme({
        nome: _nome, 
        setor: _setor, 
        imagem: 'https://picsum.photos/150/150?random'}
      );
      this.local.back();

    } else {
      alert('Você deve digitar todos os dados');
    }
  }

  voltar() {
    this.local.back();
  }

}
