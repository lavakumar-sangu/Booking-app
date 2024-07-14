import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component';

interface Booking {
  id: string;
  name: string;
  startTime: string;
  endTime: string;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadBookings();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BookingDialogComponent);

    dialogRef.afterClosed().subscribe((result: Booking) => {
      if (result) {
        this.bookings.push(result);
        localStorage.setItem('bookings', JSON.stringify(this.bookings));
      }
    });
  }

  loadBookings(): void {
    const savedBookings = localStorage.getItem('bookings');
    if (savedBookings) {
      this.bookings = JSON.parse(savedBookings);
    }
  }
}
