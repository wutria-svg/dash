import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentSize } from '../../utils/component-types';

@Component({
  selector: 'nova-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NovaInputComponent {
  @Input() placeholder = '';
  @Input() value = '';
  @Input() size: ComponentSize = 'md';
  @Input() disabled = false;

  @Output() valueChange = new EventEmitter<string>();

  onInput(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }
}
