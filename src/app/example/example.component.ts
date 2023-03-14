import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'example',
    templateUrl: './example.component.html',
    styleUrls: ['./styles/example.component.master.scss']
})
export class ExampleComponent implements OnInit {
    public simpleTextControl: FormControl = new FormControl();

    public ngOnInit(): void {
        this.simpleTextControl.valueChanges.subscribe(console.log);
    }
}