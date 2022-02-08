import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITransferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private transfList : any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.transfList = []
  }

  get getTransfs() {
    return this.transfList;
  }

  getAll() : Observable<ITransferencia[]> {
    return this.httpClient.get<ITransferencia[]>(this.url);
  }

  addTransf(newTransf : ITransferencia) : Observable<ITransferencia> {
    this.processData(newTransf);

    return this.httpClient.post<ITransferencia>(this.url, newTransf);
  }

  private processData(transf: any) {
    transf.date = new Date();
  }
}
