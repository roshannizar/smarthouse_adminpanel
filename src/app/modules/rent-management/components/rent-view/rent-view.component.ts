import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { RentModel } from '../../models/rent-model';
import { RentService } from '../../services/rent.service';
import { RentCreateComponent } from '../rent-create/rent-create.component';
import { RentUpdateComponent } from '../rent-update/rent-update.component';

@Component({
  selector: 'app-rent-view',
  templateUrl: './rent-view.component.html',
  styleUrls: ['./rent-view.component.css']
})
export class RentViewComponent implements OnInit {

  isBlock = false;
  isDelete = false;
  isDisplay = false;


  search: string;
  heading_text: string;

  rents = new Array<RentModel>();
  rent = new RentModel();

  constructor(private rentService: RentService, private toastr: ToastrService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getRents();
  }

  getRents() {
    this.isBlock = true;
    this.rentService.getRents().subscribe(
      (result) => {
        this.isBlock = false;
        this.rents = result;
      },
      (error) => {
        this.isBlock = false;
        this.toastr.error('Failed to load rent', 'Error');
      }
    );
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(RentCreateComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'refresh') {
        this.getRents();
      }
    });
  }

  openUpdateDialog(model: RentModel) {
    const dialogRef = this.dialog.open(RentUpdateComponent, {
      width: '400px',
      data: model
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'refresh') {
        this.getRents();
      }
    });
  }

  closeModal() {
    this.isDisplay = false;
    this.rent = null;
    this.isDelete = false;
  }

  openViewModal(rent: RentModel) {
    this.isDisplay = true;
    this.heading_text = 'View Rent';
    this.rent = rent;
  }

  openDeleteModal(rent: RentModel) {
    this.isDelete = true;
    this.rent = rent;
    this.isDisplay = true;
    this.heading_text = `Delete ${rent.id}`;
  }

  refresh(): void {
    this.closeModal();
    this.getRents();
  }
}
