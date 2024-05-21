import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Celular } from '../models/celular';

@Injectable({
    providedIn: 'root'
})
export class CelularService {
    private apiUrl = 'http://localhost:8080/parcial/celulares';

    constructor(private http: HttpClient) { }

    // Obtener todos los celulares
    getAllCelulares(): Observable<Celular[]> {
        return this.http.get<Celular[]>(this.apiUrl);
    }

    // Obtener un celular por ID
    getCelular(id: number): Observable<Celular> {
        return this.http.get<Celular>(`${this.apiUrl}/${id}`);
    }

    // Crear un nuevo celular
    createCelular(celular: Celular): Observable<Celular> {
        return this.http.post<Celular>(this.apiUrl, celular);
    }

    // Actualizar un celular existente
    updateCelular(celular: Celular): Observable<Celular> {
        return this.http.put<Celular>(this.apiUrl, celular);
    }

    // Eliminar un celular
    deleteCelular(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
