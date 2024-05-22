
import { Component } from '@angular/core';
import { CelularService } from '../../services/celular.service';
import { Celular } from '../../models/celular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class GetComponent {
  celular: Celular | undefined;
  id!: number;

  constructor(private celularService: CelularService) {}

  getCelular() {
    this.celularService.getById(this.id).then(response => {
      this.celular = response;
      console.log('Celular obtenido: ', this.celular);
    });
  }
}
