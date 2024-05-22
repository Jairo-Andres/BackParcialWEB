import { Component } from '@angular/core';
import { CelularService } from '../../services/celular.service';
import { Celular } from '../../models/celular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class GetAllComponent {
  celulares: Celular[] = [];

  constructor(private celularService: CelularService) {
    this.getAllCelulares();
  }

  getAllCelulares() {
    this.celularService.getAll().then(response => {
      this.celulares = response;
      console.log('Todos los celulares: ', this.celulares);
    }).catch(error => {
      console.error('Error obteniendo los celulares: ', error);
    });
  }
}
