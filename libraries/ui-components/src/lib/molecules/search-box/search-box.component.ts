import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NovaButtonComponent } from '../../atoms/button';
import { NovaIconComponent } from '../../atoms/icon';
import { NovaInputComponent } from '../../atoms/input';

@Component({
  selector: 'nova-search-box',
  standalone: true,
  imports: [NovaIconComponent, NovaInputComponent, NovaButtonComponent],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NovaSearchBoxComponent {
  @Input() placeholder = 'Buscar...';
  @Input() value = '';

  @Output() searched = new EventEmitter<string>();
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }

  onSearch(): void {
    this.searched.emit(this.value);
  }
}
