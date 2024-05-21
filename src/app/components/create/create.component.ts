import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CelularService } from '../../services/celular.service';
import { Celular } from '../../models/celular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  celular: Celular = new Celular('', '', new Date(), 0, 0, '', '');

  constructor(private celularService: CelularService, private router: Router) {}

  createCelular(): void {
    this.celularService.createCelular(this.celular).subscribe(() => {
      this.router.navigate(['/get-all']);
    });
  }
}
