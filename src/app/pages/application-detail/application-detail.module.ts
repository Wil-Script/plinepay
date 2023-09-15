import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApplicationDetailComponent } from './application-detail.component';
import { ApplicationDetailPageModule } from '../application-detail-pages/application-detail-page.module';

@NgModule({
  declarations: [ApplicationDetailComponent],
  imports: [CommonModule, RouterModule, ApplicationDetailPageModule],
})
export class DashboardModule {}
