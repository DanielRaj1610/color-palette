import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ColorCode } from '../color-palette/color-palette.component';

@Component({
  selector: 'app-color-cell',
  templateUrl: './color-cell.component.html',
  styleUrls: ['./color-cell.component.scss'],
})
export class ColorCellComponent implements OnInit {
  @Input() colors: ColorCode[];
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  copyMessage($event: Event, val?: string): void {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;

    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    this.openSnackBar(`Copied: ${val}`, 'Close');
    document.body.removeChild(selBox);
  }
}
