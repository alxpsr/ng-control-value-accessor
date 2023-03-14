import { Component, Directive, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, startWith } from 'rxjs';

@Directive()
export class SettingsComponent implements OnInit {
  public defaultConfigs: Array<{ title: string, id: number }> = [
    {
      title: 'Отображать заголовок',
      id: 1
    },
    {
      title: 'Отображать дату рождения',
      id: 2
    },
    {
      title: 'Отображать аватар',
      id: 3
    }
  ]
  public controls: Map<number, FormControl> = new Map();
  public value: any;

  constructor() { }

  public ngOnInit(): void {
    this.defaultConfigs.forEach((item, index) => {
      this.controls.set(index + 1, new FormControl());
    })

    const controlsAsArray: FormControl[] = [...this.controls.values()];
    
    combineLatest(
      controlsAsArray
        .map(c => c.valueChanges.pipe(startWith(c.value)))
    ).subscribe(data => this.value = data);

  }

  public saveBaseConfig(): void {
    console.log(1);
  }

  public savePagination(): void {
    console.log(0);
  }
}
