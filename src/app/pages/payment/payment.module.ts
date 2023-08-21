import { NgModule } from '@angular/core';
import {
  LucideAngularModule,
  File,
  Home,
  Menu,
  UserCheck,
} from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ File, Home, Menu, UserCheck })],
})
export class PaymentModule {}
