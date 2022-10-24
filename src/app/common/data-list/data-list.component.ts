import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
})
export class DataListComponent implements OnInit {
  @Input() dataList: User[] = [];
  @Input() dataRow: User = new User();

  @Output() selectClick: EventEmitter<User> = new EventEmitter();
  @Output() updateClick: EventEmitter<User> = new EventEmitter();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter();

  onSelectClick(): void {
    this.selectClick.emit(this.dataRow);
  }

  onUpdateClick(): void {
    this.updateClick.emit(this.dataRow);
  }

  onDeleteClick(): void {
    this.deleteClick.emit(this.dataRow);
  }

  constructor() {}

  ngOnInit(): void {}
}
