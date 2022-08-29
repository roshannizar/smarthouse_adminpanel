import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UtilityModel } from '../../models/utility-model';
import { UtilityService } from '../../services/utility.service';
import { UtilityCreateComponent } from '../utility-create/utility-create.component';
import { UtilityUpdateComponent } from '../utility-update/utility-update.component';

@Component({
  selector: 'app-utility-view',
  templateUrl: './utility-view.component.html',
  styleUrls: ['./utility-view.component.css']
})
export class UtilityViewComponent implements OnInit {

  isBlock = false;
  isDelete = false;
  isDisplay = false;


  search: string;
  heading_text: string;

  utilities = new Array<UtilityModel>();
  utility = new UtilityModel();

  constructor(private utilityService: UtilityService, private toastr: ToastrService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUtilities();
  }

  getUtilities() {
    this.isBlock = true;
    this.utilityService.getUtilities().subscribe(
      (result) => {
        this.isBlock = false;
        this.utilities = result;
      },
      (error) => {
        this.isBlock = false;
        this.toastr.error('Failed to load utility', 'Error');
      }
    );
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(UtilityCreateComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'refresh') {
        this.getUtilities();
      }
    });
  }

  openUpdateDialog(model: UtilityModel) {
    const dialogRef = this.dialog.open(UtilityUpdateComponent, {
      width: '400px',
      data: model
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'refresh') {
        this.getUtilities();
      }
    });
  }

  closeModal() {
    this.isDisplay = false;
    this.utility = null;
    this.isDelete = false;
  }

  openViewModal(utility: UtilityModel) {
    this.isDisplay = true;
    this.heading_text = 'View Utility';
    this.utility = utility;
  }

  openDeleteModal(utility: UtilityModel) {
    this.isDelete = true;
    this.utility = utility;
    this.isDisplay = true;
    this.heading_text = `Delete ${utility.id}`;
  }

  refresh(): void {
    this.closeModal();
    this.getUtilities();
  }

}
