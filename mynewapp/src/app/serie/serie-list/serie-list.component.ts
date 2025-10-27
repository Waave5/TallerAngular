import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { dataSeries } from '../dataSeries';
import { SerieService } from '../serie.service';


@Component({
  selector: 'app-serie-list',
  standalone: false,
  templateUrl: './serie-list.component.html',
  styleUrl: './serie-list.component.css',
})
export class SerieListComponent implements OnInit {
  series: Array<Serie> = [];

  constructor(private serieService: SerieService) {}

  getSeriesList() {
    this.serieService.getSeries().subscribe((data) => {
    console.log("DATA RECIBIDA:", data);   // ← MUY IMPORTANTE
    this.series = data;
  });
  }

  ngOnInit() {
    this.getSeriesList();
  }

  getAverageSeasons(): number {
  let total = 0;
  for (let serie of this.series) {
    total += serie.seasons;
  }
  return this.series.length ? (total / this.series.length) : 0;
}
}
