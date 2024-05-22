import { Component } from '@angular/core';
import { CelularService } from '../../services/celular.service';
import { Celular } from '../../models/celular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class UpdateComponent {
  celular: Celular = new Celular();

  constructor(private celularService: CelularService) {}

  updateCelular() {
    this.celularService.update(this.celular).then(response => {
      console.log('Celular actualizado: ', response);
    });
  }
}
