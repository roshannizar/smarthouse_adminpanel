import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { GarbageModel } from '../../models/garbage-model';
import { GarbageService } from '../../services/garbage.service';
import { GarbageViewComponent } from '../garbage-view/garbage-view.component';

@Component({
  selector: 'app-garbage-create',
  templateUrl: './garbage-create.component.html',
  styleUrls: ['./garbage-create.component.css']
})
export class GarbageCreateComponent implements OnInit {

  isBlock = false;

  garbage = new GarbageModel();

  garbageGroup: FormGroup;

  constructor(public dialogRef: MatDialogRef<GarbageViewComponent>, private fb: FormBuilder, private garbageService: GarbageService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.createGarbageForm();
  }

  createGarbageForm() {
    this.garbageGroup = this.fb.group({
      weight: ['', Validators.required],
      collectingDate: ['', Validators.required],
      garbageType: ['', Validators.required]
    });
  }

  onSelectDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.garbage.collectingDate = event.value;
  }

  onSelectGarbageType(event) {
    this.garbage.garbageType = event;
  }

  close(response: string) {
    this.dialogRef.close(response);
  }

  onSave() {
    this.isBlock = true;
    this.garbage = Object.assign({}, this.garbage, this.garbageGroup.value);
    this.garbageService.createGarbage(this.garbage).subscribe(
      (result) => {
        this.isBlock = false;
        this.toastr.success('Garbage saved successfully', 'Success');
        this.close('refresh');
      },
      (error) => {
        this.isBlock = false;
        this.toastr.error('Failed to create garbage', 'Error');
      }
    );
  }
}
