import { RegiaoEnum } from './regiao.enum';

export class EstadoEnum {
  static readonly AC = new EstadoEnum('AC', 'Acre', RegiaoEnum.Norte);
  static readonly AL = new EstadoEnum('AL', 'Alagoas', RegiaoEnum.Nordeste);
  static readonly AM = new EstadoEnum('AM', 'Amazonas', RegiaoEnum.Norte);
  static readonly AP = new EstadoEnum('AP', 'Amapá', RegiaoEnum.Norte);
  static readonly BA = new EstadoEnum('BA', 'Bahia', RegiaoEnum.Nordeste);
  static readonly CE = new EstadoEnum('CE', 'Ceará', RegiaoEnum.Nordeste);
  static readonly DF = new EstadoEnum(
    'DF',
    'Distrito Federal',
    RegiaoEnum.CentroOeste
  );
  static readonly ES = new EstadoEnum(
    'ES',
    'Espírito Santo',
    RegiaoEnum.Sudeste
  );
  static readonly GO = new EstadoEnum('GO', 'Goiás', RegiaoEnum.CentroOeste);
  static readonly MA = new EstadoEnum('MA', 'Maranhão', RegiaoEnum.Nordeste);
  static readonly MG = new EstadoEnum('MG', 'Minas Gerais', RegiaoEnum.Sudeste);
  static readonly MS = new EstadoEnum(
    'MS',
    'Mato Grosso do Sul',
    RegiaoEnum.CentroOeste
  );
  static readonly MT = new EstadoEnum(
    'MT',
    'Mato Grosso',
    RegiaoEnum.CentroOeste
  );
  static readonly PA = new EstadoEnum('PA', 'Pará', RegiaoEnum.Norte);
  static readonly PB = new EstadoEnum('PB', 'Paraíba', RegiaoEnum.Nordeste);
  static readonly PE = new EstadoEnum('PE', 'Pernambuco', RegiaoEnum.Nordeste);
  static readonly PI = new EstadoEnum('PI', 'Piauí', RegiaoEnum.Nordeste);
  static readonly PR = new EstadoEnum('PR', 'Paraná', RegiaoEnum.Sul);
  static readonly RJ = new EstadoEnum(
    'RJ',
    'Rio de Janeiro',
    RegiaoEnum.Sudeste
  );
  static readonly RN = new EstadoEnum(
    'RN',
    'Rio Grande do Norte',
    RegiaoEnum.Nordeste
  );
  static readonly RO = new EstadoEnum('RO', 'Rondônia', RegiaoEnum.Norte);
  static readonly RR = new EstadoEnum('RR', 'Roraima', RegiaoEnum.Norte);
  static readonly RS = new EstadoEnum(
    'RS',
    'Rio Grande do Sul',
    RegiaoEnum.Sul
  );
  static readonly SC = new EstadoEnum('SC', 'Santa Catarina', RegiaoEnum.Sul);
  static readonly SE = new EstadoEnum('SE', 'Sergipe', RegiaoEnum.Nordeste);
  static readonly SP = new EstadoEnum('SP', 'São Paulo', RegiaoEnum.Sudeste);
  static readonly TO = new EstadoEnum('TO', 'Tocantins', RegiaoEnum.Norte);

  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly regiao: RegiaoEnum
  ) {}

  static list(): EstadoEnum[] {
    return Object.values(EstadoEnum).filter(
      (value) => value instanceof EstadoEnum
    ) as EstadoEnum[];
  }

  static fromSigla(sigla: string): EstadoEnum | undefined {
    return this.list().find((e) => e.name === sigla.toUpperCase());
  }

  static byRegiao(regiao: RegiaoEnum): EstadoEnum[] {
    return this.list().filter((e) => e.regiao === regiao);
  }
}
