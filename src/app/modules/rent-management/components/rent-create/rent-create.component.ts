import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { RentModel } from '../../models/rent-model';
import { RentService } from '../../services/rent.services';
import { RentViewComponent } from '../rent-view/rent-view.component';

@Component({
  selector: 'app-rent-create',
  templateUrl: './rent-create.component.html',
  styleUrls: ['./rent-create.component.css']
})
export class RentCreateComponent implements OnInit {

  isBlock = false;

  rent = new RentModel();

  rentGroup: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RentViewComponent>,
    private toastr: ToastrService, private rentService: RentService) { }

  ngOnInit(): void {
    this.createRentForm();
  }

  createRentForm() {
    this.rentGroup = this.fb.group({
      name: ['', Validators.required],
      amount: [0, Validators.required],
      paidDate: ['']
    });
  }

  onSelectDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.rent.paidDate = event.value;
  }

  close(response: string) {
    this.dialogRef.close(response);
  }

  onSave() {
    this.isBlock = true;
    this.rent = Object.assign({}, this.rent, this.rentGroup.value);
    this.rentService.createRent(this.rent).subscribe(
      (result) => {
        this.isBlock = false;
        this.close('refresh');
        this.toastr.success('Rent details saved successfully!', 'Success');
      },
      (error) => {
        this.isBlock = false;
        this.toastr.error('Failed to create rent', 'Error');
      }
    );
  }
}

