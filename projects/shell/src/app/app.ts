import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputText } from '@shared-ui-kit';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputText, ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('shell');

  protected onTitleChange(newTitle: string): void {
    console.log(newTitle);
  }
  
}
