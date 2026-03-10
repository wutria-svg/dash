import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentSize, ComponentVariant } from '../../utils/component-types';

@Component({
  selector: 'nova-button',
  standalone: true,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '"nova-button-host size-" + size',
  },
})
export class NovaButtonComponent {
  @Input() label = 'Button';
  @Input() size: ComponentSize = 'md';
  @Input() variant: ComponentVariant = 'filled';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;

  @Output() pressed = new EventEmitter<void>();

  onClick(): void {
    if (this.disabled) {
      return;
    }

    this.pressed.emit();
  }
}
