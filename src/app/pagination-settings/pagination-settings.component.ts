import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PAGINATION_SETTINGS_VALUES } from './pagination-settings-values';

export type PaginationType = 'page' | 'load';
type OnChangeCallback = (value: IPaginationViewItem) => void;

export interface IPaginationViewItem {
  type: PaginationType;
  title: string;
  viewSrc: string;
  isActive: boolean;
}

@Component({
  selector: 'app-pagination-settings',
  templateUrl: './pagination-settings.component.html',
  styleUrls: ['./pagination-settings.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PaginationSettingsComponent),
      multi: true
    },
  ]
})
export class PaginationSettingsComponent implements ControlValueAccessor, OnInit {
  public types: IPaginationViewItem[] = PAGINATION_SETTINGS_VALUES;
  public documentCountList: number[] = [20, 30, 40];
  public value!: IPaginationViewItem;
  
  protected onChange!: OnChangeCallback;
  protected onTouchedFn: any = () => {  /** */ };

  constructor() { }

  public ngOnInit(): void {
    
  }

  public changeType(value: IPaginationViewItem): void {
    this.setActiveType(value);
    this.onChange(value);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  public writeValue(value: any): void {
    if (value) {
      this.changeType(value);
    }
  }
  
  private setActiveType(nextItem: IPaginationViewItem): void {
    this.types.forEach((item: IPaginationViewItem) => {
      if (nextItem === item) {
        nextItem.isActive = true;

        return;
      }

      item.isActive = false;
    });
  }
}
