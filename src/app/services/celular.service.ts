import { Injectable } from '@angular/core';
import axios from 'axios';
import { Celular } from '../models/celular';

@Injectable({
  providedIn: 'root'
})
export class CelularService {
  private url = "http://localhost:8080/parcial/celulares";

  constructor() { }

  // Servicio GET ALL de Celular
  getAll(): Promise<Celular[]> {
    return axios.get(this.url).then(response => {
      console.log("Datos obtenidos: ", response.data);
      return response.data;
    });
  }


  // Servicio GET de Celular por ID
  getById(id: number): Promise<Celular> {
    return axios.get(`${this.url}/${id}`).then(response => {
      console.log("Celular obtenido: ", response.data);
      return response.data;
    });
  }

  // Servicio POST para crear un nuevo Celular
  create(celular: Celular): Promise<Celular> {
    return axios.post(this.url, celular).then(response => {
      console.log("Celular creado: ", response.data);
      return response.data;
    });
  }

  // Servicio PUT para actualizar un Celular existente
  update(celular: Celular): Promise<Celular> {
    return axios.put(this.url, celular).then(response => {
      console.log("Celular actualizado: ", response.data);
      return response.data;
    });
  }

  // Servicio DELETE para eliminar un Celular por ID
  delete(id: number): Promise<void> {
    return axios.delete(`${this.url}/${id}`).then(response => {
      console.log("Celular eliminado");
    });
  }
}
