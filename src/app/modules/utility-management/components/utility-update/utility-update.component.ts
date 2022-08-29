import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UtilityModel } from '../../models/utility-model';
import { UtilityService } from '../../services/utility.service';
import { UtilityViewComponent } from '../utility-view/utility-view.component';

@Component({
  selector: 'app-utility-update',
  templateUrl: './utility-update.component.html',
  styleUrls: ['./utility-update.component.css']
})
export class UtilityUpdateComponent implements OnInit {

  isBlock = false;

  utility = new UtilityModel();

  utilityGroup: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<UtilityViewComponent>,
    private toastr: ToastrService, private utilityService: UtilityService, @Inject(MAT_DIALOG_DATA) public data: UtilityModel) { }

  ngOnInit(): void {
    this.createUtilityForm();
    this.patchUtilityForm(this.data);
  }

  createUtilityForm() {
    this.utilityGroup = this.fb.group({
      id: [''],
      accountNumber: ['', Validators.required],
      amount: [0, Validators.required],
      type: ['']
    });
  }

  patchUtilityForm(utility: UtilityModel) {
    this.utilityGroup.patchValue({
      id: utility.id,
      accountNumber: utility.accountNumber,
      amount: utility.amount,
      type: utility.type,
    });
  }

  close(response: string) {
    this.dialogRef.close(response);
  }

  onUpdate() {
    this.isBlock = true;
    this.utility = Object.assign({}, this.utility, this.utilityGroup.value);
    this.utilityService.updateUtility(this.utility).subscribe(
      (result) => {
        this.isBlock = false;
        this.close('refresh');
        this.toastr.success('Utility details updated successfully!', 'Success');
      },
      (error) => {
        this.isBlock = false;
        this.toastr.error('Failed to update utility', 'Error');
      }
    );
  }

}
