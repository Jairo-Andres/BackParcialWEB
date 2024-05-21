import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CelularService } from '../../services/celular.service';
import { Celular } from '../../models/celular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  celular: Celular | undefined;
  id!: number;

  constructor(private route: ActivatedRoute, private celularService: CelularService) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.celularService.getCelular(this.id).subscribe((data: Celular) => {
      this.celular = data;
    });
  }
}
