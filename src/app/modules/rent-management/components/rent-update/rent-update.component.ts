import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GarbageModel } from 'app/modules/garbage-management/models/garbage-model';
import { ToastrService } from 'ngx-toastr';
import { RentModel } from '../../models/rent-model';
import { RentService } from '../../services/rent.service';
import { RentViewComponent } from '../rent-view/rent-view.component';

@Component({
  selector: 'app-rent-update',
  templateUrl: './rent-update.component.html',
  styleUrls: ['./rent-update.component.css']
})
export class RentUpdateComponent implements OnInit {

  isBlock = false;

  rent = new RentModel();

  rentGroup: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RentViewComponent>,
    private toastr: ToastrService, private rentService: RentService, @Inject(MAT_DIALOG_DATA) public data: RentModel) { }

  ngOnInit(): void {
    this.createRentForm();
    this.patchRentForm(this.data);
  }

  createRentForm() {
    this.rentGroup = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      amount: [0, Validators.required],
      paidDate: ['']
    });
  }

  patchRentForm(rent: RentModel) {
    this.rentGroup.patchValue({
      id: rent.id,
      name: rent.name,
      amount: rent.amount,
      paidDate: rent.paidDate,
    });
  }

  onSelectDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.rent.paidDate = event.value;
  }

  close(response: string) {
    this.dialogRef.close(response);
  }

  onUpdate() {
    this.isBlock = true;
    this.rent = Object.assign({}, this.rent, this.rentGroup.value);
    this.rentService.updateRent(this.rent).subscribe(
      (result) => {
        this.isBlock = false;
        this.close('refresh');
        this.toastr.success('Rent details updated successfully!', 'Success');
      },
      (error) => {
        this.isBlock = false;
        this.toastr.error('Failed to update rent', 'Error');
      }
    );
  }

}
