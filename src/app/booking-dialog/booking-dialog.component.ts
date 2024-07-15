import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
})
export class BookingDialogComponent {
  name: string = '';
  startDate: Date | null = null;
  endDate: Date | null = null;
  startTime: string = '';
  endTime: string = '';
  constructor(public dialogRef: MatDialogRef<BookingDialogComponent>) { }

  addBooking(): void {
    if (!this.startDate || !this.endDate || !this.startTime || !this.endTime) {
      console.error('Please provide valid dates and times');
      return;
    }

    const startTimeParts = this.startTime.split(':');
    const endTimeParts = this.endTime.split(':');

    const booking = {
      id: this.generateToken(),
      name: this.name,
      startTime: new Date(this.startDate.setHours(+startTimeParts[0], +startTimeParts[1])),
      endTime: new Date(this.endDate.setHours(+endTimeParts[0], +endTimeParts[1]))
    };

    this.dialogRef.close(booking);
  }


  private generateToken(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
