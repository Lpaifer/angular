import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div style="max-width: 500px; margin: auto;">
      <h1>📝 Lista de Tarefas</h1>

      <input [(ngModel)]="novaTarefa" placeholder="Digite uma tarefa" />
      <button (click)="adicionarTarefa()">Adicionar</button>

      <ul>
        <li *ngFor="let tarefa of tarefas; let i = index">
          {{ tarefa }}
          <button (click)="removerTarefa(i)">❌</button>
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  novaTarefa = '';
  tarefas: string[] = [];

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.tarefas.push(this.novaTarefa);
      this.novaTarefa = '';
    }
  }

  removerTarefa(index: number) {
    this.tarefas.splice(index, 1);
  }
}
