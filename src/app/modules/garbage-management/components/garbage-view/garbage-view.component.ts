import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { GarbageModel } from '../../models/garbage-model';
import { GarbageService } from '../../services/garbage.service';
import { GarbageCreateComponent } from '../garbage-create/garbage-create.component';
import { GarbageUpdateComponent } from '../garbage-update/garbage-update.component';

@Component({
  selector: 'app-garbage-view',
  templateUrl: './garbage-view.component.html',
  styleUrls: ['./garbage-view.component.css']
})
export class GarbageViewComponent implements OnInit {

  isBlock = false;
  isDelete = false;
  isDisplay = false;


  search: string;
  heading_text: string;

  garbages = new Array<GarbageModel>();
  garbage = new GarbageModel();

  constructor(private toastr: ToastrService, private garbageService: GarbageService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getGarbages();
  }

  getGarbages() {
    this.isBlock = true;
    this.garbageService.getGarbages().subscribe(
      (result) => {
        this.isBlock = false;
        this.garbages = result;
      },
      (error) => {
        this.isBlock = false;
        this.toastr.error('Failed to load garbage', 'Error');
      }
    );
  }

  openCreateDialog() {
    const dialogRef = this.dialog.open(GarbageCreateComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'refresh') {
        this.getGarbages();
      }
    });
  }

  openUpdateDialog(model: GarbageModel) {
    const dialogRef = this.dialog.open(GarbageUpdateComponent, {
      width: '400px',
      data: model
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'refresh') {
        this.getGarbages();
      }
    });
  }

  closeModal() {
    this.isDisplay = false;
    this.garbage = null;
    this.isDelete = false;
  }

  openViewModal(garbage: GarbageModel) {
    this.isDisplay = true;
    this.heading_text = 'View Garbage';
    this.garbage = garbage;
  }

  openDeleteModal(garbage: GarbageModel) {
    this.isDelete = true;
    this.garbage = garbage;
    this.isDisplay = true;
    this.heading_text = `Delete ${garbage.id}`;
  }

  refresh(): void {
    this.closeModal();
    this.getGarbages();
  }

  getGarbageType(type: number) {
    if (type === 0) {
      return 'Plastic';
    } else if (type === 1) {
      return 'Organic';
    } else if (type === 2) {
      return 'Glass';
    } else {
      return 'Others';
    }
  }

  searchGarbage() {
    if (this.search !== '') {
      this.garbages = this.garbages.filter(s => s.weight.toLowerCase().match(this.search.toLowerCase()));
    } else {
      this.getGarbages();
    }
  }
}
