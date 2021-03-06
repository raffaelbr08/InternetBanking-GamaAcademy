import {Component, Input} from '@angular/core';

import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Event } from '@angular/router/src/events';

@Component({
  selector: 'ngbd-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {
  closeResult: string;
  @Input() hideHeader: Boolean
  @Input() btnClass: String
  @Input() btnText: String = "Abrir modal"
  @Input() canBeOpen

  constructor(private modalService: NgbModal,  private modalAtivo: NgbActiveModal) {
  }

  open(content, $event: UIEvent) {
    $event.preventDefault()
    
    if(this.canBeOpen == "true"){

      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });

    }
    
  }
 
  closeModal(){
    this.modalAtivo.close()
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}