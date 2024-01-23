import { Component, Input } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-small-card',
	templateUrl: './small-card.component.html',
	// add NgbModalConfig and NgbModal to the component providers
	providers: [NgbModalConfig, NgbModal],
})
  
export class SmallCardComponent {
	
	@Input()
	modalContent:string =""
	@Input()
	modalTitle:string =""
	@Input()
	buttonTitle:string =""
		
	
	constructor(
		config: NgbModalConfig,
		private modalService: NgbModal,
	) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content:any) {
		this.modalService.open(content);

	}


}