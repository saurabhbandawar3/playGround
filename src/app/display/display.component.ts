import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  @Input() formValues: any;
  @Output() val = new EventEmitter();

  btntxt = 'submit'

  ngOnInit(): void {
    console.log(this.formValues)
  }

  submit(values) {
    if (values) {
      this.val.emit(values);
    }

  }

  arr: any = [];

  onsubmit(ev: any) {
    ev.preventDefault();
    console.log(ev.target.fname.value);

    let fname = ev.target.fname.value;
    this.arr.push(fname);
  }

  updatetext(t: any) {
    console.log(t.target.value);
  }

}
