import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'a11y-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class IntroComponent { }
