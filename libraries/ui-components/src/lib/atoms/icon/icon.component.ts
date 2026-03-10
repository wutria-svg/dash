import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'nova-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NovaIconComponent {
  @Input() name = 'search';
}
