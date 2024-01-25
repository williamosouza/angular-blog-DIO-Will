import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { gestCard } from 'src/app/data/gestCard';

@Component({
	selector: 'app-small-card',
	templateUrl: './small-card.component.html',
	// add NgbModalConfig and NgbModal to the component providers
	providers: [NgbModalConfig, NgbModal],
})
  
export class SmallCardComponent implements OnInit {
	
	
	modalContent:string =""

	@Input()
	modalTitle:string =""
	@Input()
	buttonTitle:string =""
	@Input()
	contentData:string | null = ""

	
	
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

	ngOnInit(): void {

		this.setValuesToComponent(this.contentData)

	}

	setValuesToComponent(contentData:string | null) {
		const result = gestCard.filter((article) => article.contentData === contentData)[0]
			this.modalContent = result.text

	}

}