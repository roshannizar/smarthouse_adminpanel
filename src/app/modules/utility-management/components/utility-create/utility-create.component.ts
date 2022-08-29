import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { RentViewComponent } from 'app/modules/rent-management/components/rent-view/rent-view.component';
import { RentModel } from 'app/modules/rent-management/models/rent-model';
import { ToastrService } from 'ngx-toastr';
import { UtilityModel } from '../../models/utility-model';
import { UtilityService } from '../../services/utility.service';
import { UtilityViewComponent } from '../utility-view/utility-view.component';

@Component({
  selector: 'app-utility-create',
  templateUrl: './utility-create.component.html',
  styleUrls: ['./utility-create.component.css']
})
export class UtilityCreateComponent implements OnInit {

  isBlock = false;

  utility = new UtilityModel();

  utilityGroup: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<UtilityViewComponent>,
    private toastr: ToastrService, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.createRentForm();
  }

  createRentForm() {
    this.utilityGroup = this.fb.group({
      accountNumber: ['', Validators.required],
      amount: [0, Validators.required],
      type: ['', Validators.required]
    });
  }

  close(response: string) {
    this.dialogRef.close(response);
  }

  onSave() {
    this.isBlock = true;
    this.utility = Object.assign({}, this.utility, this.utilityGroup.value);
    this.utilityService.createUtility(this.utility).subscribe(
      (result) => {
        this.isBlock = false;
        this.close('refresh');
        this.toastr.success('Utility details saved successfully!', 'Success');
      },
      (error) => {
        this.isBlock = false;
        this.toastr.error('Failed to create utility', 'Error');
      }
    );
  }
}
