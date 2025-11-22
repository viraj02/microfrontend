import { Component, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'lib-input-text',
  imports: [InputTextModule, FormsModule, ],
  templateUrl: './input-text.html',
  styleUrl: './input-text.css',
})
export class InputText {

  value = model('Hello');
  valueChange = output<string>();

  protected onInput(value: string): void {
    this.valueChange.emit(value);
  }

}
