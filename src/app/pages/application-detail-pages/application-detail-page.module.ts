import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StatistiqueComponent } from './statistique/statistique.component';
import { PaiementComponent } from './paiement/paiement.component';
import { OverviewComponent } from './overview/overview.component';
@NgModule({
  declarations: [StatistiqueComponent, PaiementComponent, OverviewComponent],
  imports: [CommonModule, RouterModule],
  exports: [],
})
export class ApplicationDetailPageModule {}
