import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RentModel } from '../../models/rent-model';
import { RentService } from '../../services/rent.service';

@Component({
  selector: 'app-rent-delete',
  templateUrl: './rent-delete.component.html',
  styleUrls: ['./rent-delete.component.css']
})
export class RentDeleteComponent implements OnInit {

  isBlock = false;
  name: string;

  @Input() rent: RentModel;
  @Output() deleted = new EventEmitter();

  constructor(private rentService: RentService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.name = this.rent.id;
  }

  confirmDelete(id: string) {
    this.isBlock = true;
    this.rentService.deleteRent(id).subscribe(
      (result) => {
        this.isBlock = false;
        this.deleted.emit();
        this.toastr.success('Deleted successfully!');
      },
      (error) => {
        this.isBlock = false;
        this.toastr.error(error.message, `Failed to delete ${id}`);
      }
    );
  }

}
