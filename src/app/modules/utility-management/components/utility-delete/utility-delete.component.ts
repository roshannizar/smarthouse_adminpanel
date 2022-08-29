import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UtilityModel } from '../../models/utility-model';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-utility-delete',
  templateUrl: './utility-delete.component.html',
  styleUrls: ['./utility-delete.component.css']
})
export class UtilityDeleteComponent implements OnInit {

  isBlock = false;
  name: string;

  @Input() utility: UtilityModel;
  @Output() deleted = new EventEmitter();

  constructor(private utilityService: UtilityService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.name = this.utility.id;
  }

  confirmDelete(id: string) {
    this.isBlock = true;
    this.utilityService.deleteUtility(id).subscribe(
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
