import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'a11y-root',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
