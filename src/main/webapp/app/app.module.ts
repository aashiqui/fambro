import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { FambroSharedModule } from 'app/shared/shared.module';
import { FambroCoreModule } from 'app/core/core.module';
import { FambroAppRoutingModule } from './app-routing.module';
import { FambroHomeModule } from './home/home.module';
import { FambroEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    FambroSharedModule,
    FambroCoreModule,
    FambroHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    FambroEntityModule,
    FambroAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class FambroAppModule {}
