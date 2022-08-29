import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { WaterBillModel } from '../../models/water-bill-model';
import { WaterBillService } from '../../services/water.bill.service';
import { WaterBillCreateComponent } from '../water-bill-create/water-bill-create.component';
import { WaterBillUpdateComponent } from '../water-bill-update/water-bill-update.component';

@Component({
  selector: 'app-water-bill-view',
  templateUrl: './water-bill-view.component.html',
  styleUrls: ['./water-bill-view.component.css']
})
export class WaterBillViewComponent implements OnInit {

  isBlock = false;
  isDelete = false;
  isDisplay = false;


  search: string;
  heading_text: string;

  waterBills = new Array<WaterBillModel>();
  waterBill = new WaterBillModel();

  constructor(private waterBillService: WaterBillService, private toastr: ToastrService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getWaterBills();
  }

  getWaterBills() {
    this.isBlock = true;
    this.waterBillService.getWaterBills().subscribe(
      (result) => {
        this.isBlock = false;
        this.waterBills = result;
      },
      (error) => {
        this.isBlock = false;
        this.toastr.error('Failed to load waterBill', 'Error');
      }
    );
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(WaterBillCreateComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'refresh') {
        this.getWaterBills();
      }
    });
  }

  openUpdateDialog(model: WaterBillModel) {
    const dialogRef = this.dialog.open(WaterBillUpdateComponent, {
      width: '400px',
      data: model
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'refresh') {
        this.getWaterBills();
      }
    });
  }

  closeModal() {
    this.isDisplay = false;
    this.waterBill = null;
    this.isDelete = false;
  }

  openViewModal(waterBill: WaterBillModel) {
    this.isDisplay = true;
    this.heading_text = 'View WaterBill';
    this.waterBill = waterBill;
  }

  openDeleteModal(waterBill: WaterBillModel) {
    this.isDelete = true;
    this.waterBill = waterBill;
    this.isDisplay = true;
    this.heading_text = `Delete ${waterBill.id}`;
  }

  refresh(): void {
    this.closeModal();
    this.getWaterBills();
  }
}
