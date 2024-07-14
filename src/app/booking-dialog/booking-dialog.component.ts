import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
})
export class BookingDialogComponent {
  name: string = '';
  startTime: string = '';
  endTime: string = '';

  constructor(public dialogRef: MatDialogRef<BookingDialogComponent>) { }

  addBooking(): void {
    const booking = {
      id: this.generateToken(),
      name: this.name,
      startTime: this.startTime,
      endTime: this.endTime,
    };
    this.dialogRef.close(booking);
  }

  private generateToken(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
