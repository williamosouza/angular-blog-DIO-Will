import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-small-card',
	standalone: true,
	templateUrl: './small-card.component.html',
  // add NgbModalConfig and NgbModal to the component providers
	providers: [NgbModalConfig, NgbModal],
  imports: [SmallCardComponent]
})

export class SmallCardComponent {
	
}

