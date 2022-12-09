import {
    Component,
    Input
} from '@angular/core';

import {
    FxCross,
    FxDirection,
    FxMain,
    FxWrap
} from '../../../types/flex';

import { QuerySource } from '../../../models';

@Component({
    selector: 'async-source',
    templateUrl: 'async-source.component.html'
})
export class AsyncSourceComponent<T> {
    @Input() src: QuerySource<T>;
    @Input() inlineControls = true;
    @Input() searchLabel = 'Search';
    @Input() searchMin = 1;
    @Input() emptyLabel = 'No Data Available';
    @Input() direction: FxDirection = 'row';
    @Input() main: FxMain = 'start';
    @Input() cross: FxCross = 'start';
    @Input() wrap: FxWrap = 'wrap';
    @Input() pageStyle: string;
}
