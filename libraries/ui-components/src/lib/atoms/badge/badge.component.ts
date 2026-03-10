import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'nova-badge',
  standalone: true,
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NovaBadgeComponent {
  @Input() value = '';
  @Input() tone: 'neutral' | 'success' | 'warning' | 'error' = 'neutral';
}
