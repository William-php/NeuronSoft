import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  valor: string = '500,00';
  constructor() { }

  ngOnInit(): void {
    //this.valorReal();
  };

  atribuirValor(valor: any): void {
    this.valor = Number(valor).toFixed(2);
    this.valor = this.valor.replace('.', ',');
  };
};
