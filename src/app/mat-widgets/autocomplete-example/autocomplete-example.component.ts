import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autocomplete-example',
  templateUrl: './autocomplete-example.component.html',
  styleUrls: ['./autocomplete-example.component.scss']
})
export class AutocompleteExampleComponent {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}
