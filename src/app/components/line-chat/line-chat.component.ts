import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chat.component.html',
  styleUrls: ['./line-chat.component.css'],
})
export class LineChatComponent implements OnInit {
  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('LineChart', {
      type: 'line',
      data: {
        datasets: [
          {
            label: "Entrées d 'argent",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
        labels: [
          'Lundi',
          'Mardi',
          'Mercredi',
          'Jeudi',
          'Vendredi',
          'Samedi',
          'Dimanche',
        ],
      },
    });
  }
}
