import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-footer',
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
