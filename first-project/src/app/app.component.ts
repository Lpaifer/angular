import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div style="max-width: 500px; margin: 0 auto;">
      <h2>Lista de Tarefas 📝</h2>

      <input [(ngModel)]="novaTarefa" placeholder="Digite uma tarefa" />
      <button (click)="adicionarTarefa()">Adicionar</button>

      <ul>
        <li *ngFor="let tarefa of listaTarefas; let i = index">
          {{ tarefa }}
          <button (click)="removerTarefa(i)">❌</button>
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  novaTarefa = '';
  listaTarefas: string[] = [];

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      this.listaTarefas.push(this.novaTarefa);
      this.novaTarefa = '';
    }
  }

  removerTarefa(indice: number) {
    this.listaTarefas.splice(indice, 1);
  }
}
