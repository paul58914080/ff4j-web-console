import {Component, OnInit} from '@angular/core';
import {ColumnApi, GridApi, GridOptions, RowNode, ColDef} from 'ag-grid-community';

import {FeatureService} from '../../shared/services/feature.service';
import {Feature} from '../../shared/models/Feature';
import {NGXLogger} from 'ngx-logger';
import MapUtils from '../../shared/utils/map.utils';
import {FeatureRendererComponent} from './feature-renderer.component';

@Component({
  selector: 'ff4j-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  features: Feature[];
  filter: string;
  gridApi: GridApi;
  columnApi: ColumnApi;
  gridOptions: GridOptions;

  constructor(private featureService: FeatureService, private logger: NGXLogger) {
      const colDefs: ColDef[] = [
          {
              field: 'uid',
              getQuickFilterText: (params) => {
                  return params.value;
              }
          },
          {
              field: 'description',
              getQuickFilterText:  (params) => {
                  return params.value;
              }
          },
          {
              field: 'group',
              getQuickFilterText:  (params) => {
                  return params.value;
              }
          },
          {
              field: 'permissions',
              getQuickFilterText:  (params) => {
                  return params.value;
              }
          }
      ];
      this.gridOptions = {
          headerHeight: 0,
          columnDefs: colDefs,
          rowHeight: 160,
          suppressHorizontalScroll: true,
          enableFilter: true,
          fullWidthCellRenderer: 'fullWidthCellRenderer',
          frameworkComponents: {
              fullWidthCellRenderer: FeatureRendererComponent
          },
          isFullWidthCell: (rowNode: RowNode) => true,
          onGridReady: (params) => {
              this.gridApi = params.api;
              this.columnApi = params.columnApi;
          },
          pagination: true,
          paginationPageSize: 5
      };
  }

  ngOnInit() {
    this.featureService.getFeatures().subscribe((response) => {
      this.features = response;
      this.initProperties();
      this.logger.debug('Features : ' + JSON.stringify(this.features));
    }, (error) => {
      this.logger.error('Unable to fetch features', error);
    });
  }

  private initProperties() {
    this.features.forEach((feature) => {
      if (feature.customProperties && !(feature.customProperties instanceof Map)) {
        feature.customProperties = MapUtils.objectToMap(feature.customProperties);
      }
    });
  }

  onFilterTextBoxChanged() {
      this.gridOptions.api.setQuickFilter(this.filter);
  }
}
