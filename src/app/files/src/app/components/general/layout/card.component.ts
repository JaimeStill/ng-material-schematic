import {
    Component,
    Input
} from '@angular/core';

import {
    FxCross,
    FxDirection,
    FxMain
} from '../../../types/flex';

@Component({
    selector: 'card',
    templateUrl: 'card.component.html'
})
export class CardComponent {
    @Input() width: number | string = 'auto';
    @Input() minWidth: number = 320;
    @Input() maxWidth: number = 420;
    @Input() direction: FxDirection = 'column';
    @Input() main: FxMain = 'start';
    @Input() cross: FxCross = 'stretch';
    @Input() options = 'card-outline-divider rounded';
    @Input() padding: number = 0;
    @Input() margin: number = 4;
}
