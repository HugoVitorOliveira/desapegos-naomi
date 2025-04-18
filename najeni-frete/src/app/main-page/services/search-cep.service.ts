import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DadosCep } from '../models/dados-cep.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchCepService {
  private readonly url = 'https://viacep.com.br/ws';
  constructor(private http: HttpClient) {}

  public findDadosCEP(cep: string): Observable<DadosCep> {
    return this.http.get<DadosCep>(`${this.url}/${cep}/json/`);
  }

  public isCepValid(value: string): boolean {
    if (value.length !== 8) {
      return false;
    }

    const regex = /^\d{2}\.\d{3}-\d{3}$/;
    return !regex.test(value);
  }
}
