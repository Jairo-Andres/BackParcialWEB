import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CelularService } from '../../services/celular.service';
import { Celular } from '../../models/celular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  celular: Celular | undefined;
  id!: number;

  constructor(private route: ActivatedRoute, private router: Router, private celularService: CelularService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.celularService.getCelular(this.id).subscribe((data: Celular) => {
      this.celular = data;
    });
  }

  updateCelular(): void {
    if (this.celular) {
      this.celularService.updateCelular(this.celular).subscribe(() => {
        this.router.navigate(['/get-all']);
      });
    }
  }
}
