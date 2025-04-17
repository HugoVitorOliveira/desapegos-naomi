import { Injectable } from '@angular/core';
import { EstadoEnum } from '../enums/estados.enum';
import { RegiaoEnum } from '../enums/regiao.enum';

@Injectable({
  providedIn: 'root',
})
export class CalculaFreteService {
  constructor() {}

  private readonly valorBase = 10; // valor fixo para o frete (base)
  private readonly custoPorPeso = 2; // Custo adicional por quilo de peso (R$ 2 por kg)

  // Tabela de preços por distância (aproximação para Correios)
  private readonly tabelaPrecoPorRegiao: Record<
    RegiaoEnum,
    { distancia: number; precoBase: number }
  > = {
    [RegiaoEnum.Sul]: { distancia: 800, precoBase: 20 },
    [RegiaoEnum.Sudeste]: { distancia: 600, precoBase: 15 },
    [RegiaoEnum.CentroOeste]: { distancia: 700, precoBase: 18 },
    [RegiaoEnum.Norte]: { distancia: 1500, precoBase: 30 },
    [RegiaoEnum.Nordeste]: { distancia: 1200, precoBase: 25 },
  };

  // Função que calcula a distância (simulação baseada nas regiões)
  private calcularDistancia(regiao: RegiaoEnum): number {
    return this.tabelaPrecoPorRegiao.find?.distancia ?? 0;
  }

  // Função que calcula o preço do frete considerando distância e peso
  calcularFrete(
    estadoDestino: EstadoEnum,
    peso: number,
    tipoServico: 'normal' | 'expresso'
  ): number {
    const regiao = estadoDestino.regiao;
    const { precoBase, distancia } = this.tabelaPrecoPorRegiao[regiao];

    // Ajuste do valor do frete baseado no tipo de serviço (normal ou expresso)
    let precoServico = precoBase;
    if (tipoServico === 'expresso') {
      precoServico *= 1.5; // Aumenta 50% para expresso
    }

    // Cálculo do frete final
    const frete =
      this.valorBase +
      precoServico +
      peso * this.custoPorPeso +
      distancia / 100; // Calcula com base na distância (normalizada)

    return frete;
  }

  // Função de conveniência para obter o frete por sigla e tipo de serviço
  getFretePorSigla(
    siglaEstado: string,
    peso: number,
    tipoServico: 'normal' | 'expresso'
  ): number | null {
    const estado = EstadoEnum.fromSigla(siglaEstado);
    return estado ? this.calcularFrete(estado, peso, tipoServico) : null;
  }
}
