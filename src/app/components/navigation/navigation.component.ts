import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'top-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() title: string = 'Title';

  constructor() { }

  ngOnInit() {
    
  }

}
