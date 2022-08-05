import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GarbageModel } from '../../models/garbage-model';
import { GarbageService } from '../../services/garbage.service';

@Component({
  selector: 'app-garbage-delete',
  templateUrl: './garbage-delete.component.html',
  styleUrls: ['./garbage-delete.component.css']
})
export class GarbageDeleteComponent implements OnInit {

  isBlock = false;
  name: string;

  @Input() garbage: GarbageModel;
  @Output() deleted = new EventEmitter();

  constructor(private garbageService: GarbageService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.name = this.garbage.id;
  }

  confirmDelete(id: string) {
    this.isBlock = true;
    this.garbageService.deleteGarbage(id).subscribe(
      (result) => {
        this.isBlock = false;
        this.deleted.emit();
        this.toastr.success('Deleted successfully!');
      },
      (error) => {
        this.isBlock = false;
        this.toastr.error(error.message, `Failed to delete ${id}`);
      }
    );
  }

}
