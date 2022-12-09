import { HttpClient } from '@angular/common/http';
import { CoreQuery } from './core-query';
import { SnackerService } from '../../services';

import { environment } from '../../../environments/environment';

export class QuerySource<T> extends CoreQuery<T> {
    constructor(
        http: HttpClient,
        snacker: SnackerService,
        private api: string | null = null,
        private propertyName: string = 'id',
        private isDescending: boolean = false,
        initialPageSize: number = 20,
        pageSizeOptions: number[] = [5, 10, 20, 50, 100]
    ) {
        super(environment.api, http, snacker, initialPageSize, pageSizeOptions);

        this._sort = { propertyName, isDescending };
        this.endpoint = api;
    }
}
