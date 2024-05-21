import { Component, OnInit } from '@angular/core';
import { CelularService } from '../../services/celular.service';
import { Celular } from '../../models/celular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-all',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {
  celulares: Celular[] = [];

  constructor(private celularService: CelularService) {}

  ngOnInit(): void {
    this.celularService.getAllCelulares().subscribe((data: Celular[]) => {
      this.celulares = data;
    });
  }
}
