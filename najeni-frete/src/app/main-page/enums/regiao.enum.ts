export class RegiaoEnum {
  static readonly Norte = new RegiaoEnum('Norte', 'Região Norte');
  static readonly Nordeste = new RegiaoEnum('Nordeste', 'Região Nordeste');
  static readonly CentroOeste = new RegiaoEnum(
    'Centro-Oeste',
    'Região Centro-Oeste'
  );
  static readonly Sudeste = new RegiaoEnum('Sudeste', 'Região Sudeste');
  static readonly Sul = new RegiaoEnum('Sul', 'Região Sul');

  constructor(
    public readonly name: string,
    public readonly description: string
  ) {}

  static list(): RegiaoEnum[] {
    return Object.values(RegiaoEnum).filter(
      (value) => value instanceof RegiaoEnum
    ) as RegiaoEnum[];
  }

  static fromName(name: string): RegiaoEnum | undefined {
    return this.list().find((r) => r.name === name);
  }
}
