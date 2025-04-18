import { Injectable } from '@angular/core';
import { tabelaFrete } from '../utils/frete.tabela';
import { tabelaPrazo } from '../utils/prazo.tabela';

@Injectable({
  providedIn: 'root',
})
export class CalculaFreteService {
  private origem = {
    cep: '85201126',
    cidade: 'Pitanga',
    uf: 'PR',
  };

  private tabelaFrete = tabelaFrete;

  private tabelaPrazo = tabelaPrazo;

  constructor() {}

  /**
   * Calcula uma estimativa de frete baseado no UF de destino
   * @param uf UF do estado de destino (ex: 'SP', 'RJ', 'AM')
   * @returns Um objeto com o valor mínimo e máximo do frete estimado
   */
  calcularEstimativaFrete(uf: string): {
    valorMinimo: number;
    valorMaximo: number;
  } {
    const ufUpper = uf.toUpperCase();

    const estimativa = this.tabelaFrete[ufUpper];
    return {
      valorMinimo: estimativa.min,
      valorMaximo: estimativa.max,
    };
  }

  calcularEstimativaPrazo(uf: string): {
    prazoMinimo: number;
    prazoMaximo: number;
  } {
    const ufUpper = uf.toUpperCase();

    const estimativa = this.tabelaPrazo[ufUpper];
    return {
      prazoMinimo: estimativa.min,
      prazoMaximo: estimativa.max,
    };
  }
}
