import { Component } from '@angular/core';
import { CelularService } from '../../services/celular.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class DeleteComponent {
  id!: number;

  constructor(private celularService: CelularService) {}

  deleteCelular() {
    this.celularService.delete(this.id).then(() => {
      console.log('Celular eliminado');
    });
  }
}
