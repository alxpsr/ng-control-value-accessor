import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PAGINATION_SETTINGS_VALUES } from '../pagination-settings/pagination-settings-values';
import { SettingsComponent } from './settings.component';

@Component({
    selector: 'app-settings-additional',
    templateUrl: './settings-additional.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsAdditionalComponent extends SettingsComponent {
    public paginationCtrl: FormControl = new FormControl();

    public override ngOnInit(): void {
        super.ngOnInit();
        
    }

    public setLoadType(): void {
        this.paginationCtrl.setValue(PAGINATION_SETTINGS_VALUES[1]);
    }
}