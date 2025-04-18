import { Component, OnInit, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CepFormatDirective } from 'src/app/shared/cep-format.directive';
import { animate, style, transition, trigger } from '@angular/animations';
import { FreteTableComponent } from './components/frete-table/frete-table.component';
import { FreteTableModel } from './components/frete-table/frete-table.model';
import { EstadoEnum } from '../enums/estados.enum';
import { firstValueFrom, interval, Observable, timer } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SearchCepService } from '../services/search-cep.service';
import { DadosCep } from '../models/dados-cep.model';
import { CalculaFreteService } from '../services/calcula-frete.service';

@Component({
  standalone: true,
  selector: 'app-najeni-frete',
  templateUrl: './najeni-frete.component.html',
  styleUrls: ['./najeni-frete.component.scss'],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    CepFormatDirective,
    FreteTableComponent,
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
    trigger('slideBottom', [
      transition(':enter', [
        style({
          transform: 'translateY(100%)',
          opacity: 0,
        }),
        animate(
          '500ms ease-out',
          style({
            transform: 'translateY(0)',
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class NajeniFreteComponent implements OnInit {
  readonly star = signal('⋆˙⟡');

  readonly herEyes = ['⋆˙⟡', '. ݁⊹', '⋆.˚', '✮⋆˙', '.𖥔 ݁ ˖', '⋆⭒˚.⋆', '⋆✴︎˚｡⋆'];

  cepControl = new FormControl<string>('');

  tableData: FreteTableModel[] = [];

  ngOnInit(): void {
    this.initStarAnimation();
  }

  constructor(
    private cepService: SearchCepService,
    private freteService: CalculaFreteService
  ) {}

  private initStarAnimation() {
    let index: number = 0;

    interval(1000).subscribe(() => {
      if (index === this.herEyes.length - 1) {
        index = 0;
      } else {
        index++;
      }

      this.star.set(this.herEyes[index]);
    });
  }

  public async calculateFrete() {
    this.tableData = [];

    const cep = this.clearCep(this.cepControl.value ?? '');

    if (!cep || !this.cepService.isCepValid(cep)) {
      this.cepControl.setErrors({ invalid: true });
      return;
    }

    const dadosCep: DadosCep = await firstValueFrom(
      this.cepService.findDadosCEP(cep)
    );

    if (dadosCep?.erro) {
      this.cepControl.setErrors({ invalid: true });
      return;
    }

    const dadosFrete = this.freteService.calcularEstimativaFrete(dadosCep.uf);
    const dadosPrazo = this.freteService.calcularEstimativaPrazo(dadosCep.uf);
    this.tableData = [
      {
        estado: dadosCep.estado,
        preco: `R$${dadosFrete.valorMinimo} até R$${dadosFrete.valorMaximo}`,
        prazo: `${dadosPrazo.prazoMinimo} a ${dadosPrazo.prazoMaximo} dias úteis.`,
      },
    ];
  }

  private clearCep(cep: string) {
    return cep.replace(/[^\d]/g, '');
  }
}
