import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FreteTableModel } from './frete-table.model';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-frete-table',
  templateUrl: './frete-table.component.html',
  styleUrls: ['./frete-table.component.scss'],
  imports: [CommonModule, MatTableModule],
})
export class FreteTableComponent {
  @Input({ required: true })
  data!: FreteTableModel[];

  displayedColumns: string[] = ['estado', 'preco', 'prazo'];
}
