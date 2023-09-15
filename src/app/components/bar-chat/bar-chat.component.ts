import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chat.component.html',
  styleUrls: ['./bar-chat.component.css'],
})
export class BarChatComponent implements OnInit {
  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }
  createChart() {
    // this.chart = new Chart('MyChart', {
    //   type: 'bar', //this denotes tha type of chart

    //   data: {
    //     // values on X-Axis
    //     labels: ['05-12', '05-13', '05-14'],
    //     datasets: [
    //       {
    //         label: 'Sales',
    //         data: ['467', '576', '572'],
    //         backgroundColor: 'blue',
    //       }
    //     ],
    //   },
    //   options: {
    //     aspectRatio: 2.5,
    //   },
    // });
    this.chart = new Chart('MyChart', {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [10, 20, 30],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
          },
        ],
        labels: ['Shrein', 'Shop Woman', 'Maisonier Lite'],
      },
    });
  }
}
