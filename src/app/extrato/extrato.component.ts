import { ITransferencia } from './../models/transferencia.model';
import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transfList : any[] = [];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((transfResult : ITransferencia[]) => {
      this.transfList = transfResult;
    });
  }

}
