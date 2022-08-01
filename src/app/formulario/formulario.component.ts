import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Cotacao } from './cotacao';
import { Moeda } from './formulario';
import { FormularioService } from './formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  moedas: Moeda[] = [];
  cotacao: Cotacao[] = [];
  erro: any;
  formularioCotacao!: FormGroup;

  constructor(public formularioService: FormularioService) {}

  ngOnInit() {

    this.getCotacao();

    this.formularioService.getMoeda().subscribe((dados: Moeda[]) => {
    this.moedas = dados;
    console.log(dados);
    });
  }

  getCotacao() {
    this.formularioService.getCotacao(new Cotacao).subscribe(dados => {
      this.cotacao = dados;
    });
  }


}
