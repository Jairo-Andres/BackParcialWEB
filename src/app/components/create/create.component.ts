import { Component } from '@angular/core';
import { CelularService } from '../../services/celular.service';
import { Celular } from '../../models/celular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class CreateComponent {
  celular: Celular = new Celular();

  constructor(private celularService: CelularService) {}

  createCelular() {
    this.celularService.create(this.celular).then(response => {
      console.log('Celular creado: ', response);
    });
  }
}
