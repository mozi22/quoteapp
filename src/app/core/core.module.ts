import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [LoginComponent, SearchComponent],
  imports: [CommonModule, BrowserModule],
})
export class CoreModule {}
