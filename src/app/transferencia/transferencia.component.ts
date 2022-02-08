import { ITransferencia } from './../models/transferencia.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransferenciaService } from './../services/transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.scss'],
})
export class TransferenciaComponent implements OnInit {

  @Output() whenTransfered = new EventEmitter<any>();

  value : number = null;
  destiny : number = null;

  constructor(private service : TransferenciaService, private router : Router) {}

  ngOnInit(): void {}

  transferir() {
    let newTransf : ITransferencia = {
      value: this.value,
      destiny: this.destiny
    };

    this.service.addTransf(newTransf).subscribe((transfResult : ITransferencia) => {
      console.log(transfResult);
      this.clear();
      this.router.navigateByUrl('extrato');
    },
    error => console.log(error)
    );
  }

  clear() {
    this.value = null;
    this.destiny = null;
  }
}
