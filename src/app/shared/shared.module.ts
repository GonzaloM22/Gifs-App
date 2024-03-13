import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-Image/lazy-Image.component';

@NgModule({
  declarations: [SidebarComponent, LazyImageComponent],
  exports: [SidebarComponent, LazyImageComponent],
  imports: [CommonModule],
})
export class SharedModule {}
