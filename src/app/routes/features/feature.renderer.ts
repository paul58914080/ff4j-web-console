import {Component} from '@angular/core';
import {ICellRenderer, ICellRendererParams} from 'ag-grid-community';

import {Feature} from '../../shared/models/Feature';

@Component({
    selector: 'ff4j-feature-renderer',
    template: `<ff4j-feature-card [feature]='feature'></ff4j-feature-card>`
})
export class FeatureRenderer implements ICellRenderer {
    private feature: Feature;

    agInit(params: ICellRendererParams): void {
        this.feature = params.data;
    }

    refresh(params: ICellRendererParams): boolean {
        return false;
    }
}
