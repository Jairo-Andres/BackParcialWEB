import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  constructor(private router: Router) { } 

  ngOnInit(): void {
    // Aquí puedes agregar cualquier lógica adicional que necesites durante la inicialización del componente
  } 

  getAll(){
    this.router.navigate(["getAll"]);
  }

  get(){
    this.router.navigate(["get"]);
  }

  create(){
    this.router.navigate(["create"]);
  } 

  update(){
    this.router.navigate(["update"]);
  }

  delete(){
    this.router.navigate(["delete"]);
  }
}
