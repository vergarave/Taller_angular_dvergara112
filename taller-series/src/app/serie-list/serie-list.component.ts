import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {
  series: Serie[] = [];

  constructor(private serieService: SerieService) {}

  ngOnInit(): void {
    this.serieService.getSeries().subscribe(data => {
      this.series = data;
    });
  }

  getAverageSeasons(): number {
    return this.series.length > 0 ?
      this.series.reduce((sum, s) => sum + s.seasons, 0) / this.series.length : 0;
  }
}
