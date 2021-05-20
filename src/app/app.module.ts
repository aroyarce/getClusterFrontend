import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClusterComponent } from './cluster/cluster.component';

import { FormsModule } from '@angular/forms';
import { ClusterDetailComponent } from './cluster-detail/cluster-detail.component';
import { MensajesComponent } from './mensajes/mensajes.component'; // <-- NgModel lives here

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select'; 
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { DialogElementsExampleDialog} from './cluster/cluster.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon'; 

@NgModule({
  declarations: [
    AppComponent,
    ClusterComponent,
    ClusterDetailComponent,
    MensajesComponent,
    DialogElementsExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDividerModule,
    MatGridListModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
    MatIconModule
  ],
  entryComponents: [DialogElementsExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
