import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { GarbageModel } from '../../models/garbage-model';
import { GarbageService } from '../../services/garbage.service';
import { GarbageViewComponent } from '../garbage-view/garbage-view.component';

@Component({
  selector: 'app-garbage-update',
  templateUrl: './garbage-update.component.html',
  styleUrls: ['./garbage-update.component.css']
})
export class GarbageUpdateComponent implements OnInit {

  isBlock = false;

  garbage = new GarbageModel();

  garbageGroup: FormGroup;

  constructor(public dialogRef: MatDialogRef<GarbageViewComponent>, private fb: FormBuilder,
    private garbageService: GarbageService, @Inject(MAT_DIALOG_DATA) public data: GarbageModel,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createGarbageForm();
    this.patchGarbage(this.data);
  }

  createGarbageForm() {
    this.garbageGroup = this.fb.group({
      id: [''],
      weight: ['', Validators.required],
      collectingDate: ['', Validators.required],
      garbageType: ['', Validators.required]
    });
  }

  patchGarbage(garbage: GarbageModel) {
    this.garbageGroup.patchValue({
      id: garbage.id,
      weight: garbage.weight,
      collectingDate: garbage.collectingDate,
      garbageType: garbage.garbageType
    });
  }

  onSelectDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.data.collectingDate = event.value;
  }

  onSelectGarbageType(event) {
    this.data.garbageType = event;
  }

  close(response: string) {
    this.dialogRef.close(response);
  }

  onUpdate() {
    this.isBlock = true;
    this.garbage = Object.assign({}, this.garbage, this.garbageGroup.value);
    this.garbageService.updateGarbage(this.garbage).subscribe(
      (result) => {
        this.isBlock = false;
        this.toastr.success('Garbage updated successfully', 'Success');
        this.close('refresh');
      },
      (error) => {
        this.isBlock = false;
        this.toastr.error('Failed to update garbage', 'Error');
      }
    );
  }

}
