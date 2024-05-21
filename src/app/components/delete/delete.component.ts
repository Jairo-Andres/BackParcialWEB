import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CelularService } from '../../services/celular.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  id!: number;

  constructor(private route: ActivatedRoute, private router: Router, private celularService: CelularService) {
    this.id = this.route.snapshot.params['id'];
    this.deleteCelular();
  }

  deleteCelular(): void {
    this.celularService.deleteCelular(this.id).subscribe(() => {
      this.router.navigate(['/get-all']);
    });
  }
}
