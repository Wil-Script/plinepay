import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.css'],
})
export class ApplicationDetailComponent {
  appId: any;
  constructor(private route: ActivatedRoute) {
    this.appId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {}
}
