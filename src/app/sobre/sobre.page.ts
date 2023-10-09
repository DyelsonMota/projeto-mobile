import { Component } from '@angular/core';
import { alunos } from '../dados/alunos'; // Importe a lista de alunos a partir do diretório correto

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage {
  alunos = alunos; // Use a lista de alunos aqui

  constructor() {}
}
