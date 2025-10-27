import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { series } from '../dataSerie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-series-list',
  standalone: false,
  templateUrl: './series-list.html',
  styleUrl: './series-list.css',
})
export class SeriesList implements OnInit {

  series: Array<Serie> = [];

  constructor(private serieService: SerieService) {}

  getSeriesList(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
    });
  }

  ngOnInit(): void {
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

