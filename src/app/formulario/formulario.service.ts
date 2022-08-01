import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moeda } from './formulario';
import { Cotacao } from './cotacao';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  private readonly API = 'http://localhost:3000/Moeda';

  constructor(private http: HttpClient) { }

  getMoeda() {
    return this.http.get<Moeda[]>(this.API);
  }

  apiUrl = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda=%27EUR%27&@dataInicial=%2707-06-2022%27&@dataFinalCotacao=%2707-25-2022%27&$top=1000&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public getCotacao(flag: Cotacao): Observable<Cotacao[]> {
    return this.http.get<Cotacao[]>(this.apiUrl + '?flag=' + flag);
  }


}
