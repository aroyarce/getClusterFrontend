import { Component, OnInit } from '@angular/core';
import { Grid } from '../cluster';
import { ClusterService } from '../cluster.service';
import { MensajeService } from '../mensaje.service';
import {MatDialog} from '@angular/material/dialog';
import {MatDialogClose} from '@angular/material/dialog';
import { MatButton} from '@angular/material/button'; 

interface Distancia {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.scss']
})
export class ClusterComponent implements OnInit {

  clusters: boolean[][] = [[],[],[],[],[],[],[],[],[],[],[]];
  selectedHero?: Grid;
  checked = false;

  items1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  items2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  etiquetas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  grillas: number[][] = [];
  cluster_result: number[][][] = [];

  distancias: Distancia[] = [
    { value: '1', viewValue: 'Distance = 1' },
    { value: '2', viewValue: 'Distance = 2' },
    { value: '3', viewValue: 'Distance = 3' },
    { value: '4', viewValue: 'Distance = 4' },
    { value: '5', viewValue: 'Distance = 5' },
    { value: '6', viewValue: 'Distance = 6' },
    { value: '7', viewValue: 'Distance = 7' },
    { value: '8', viewValue: 'Distance = 8' },
    { value: '9', viewValue: 'Distance = 9' }
  ];

  selectedDistance = this.distancias[0].value;
  hero: Grid = {
    distancia: 1,
    grid: [[0, 1], [0, 2], [2, 3], [4, 3], [7, 3], [8, 5], [8, 7], [8, 8]],
    cluster: []
  };

  constructor(private clusterService: ClusterService, private mensajeService: MensajeService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.checked = false;
    for (let i = 0; i < 11; i++) {
      for (let j = 0; j < 11; j++) {
        this.clusters[i][j] = false;
      }
    }
  }

  onSelect(cluster: Grid): void {
    this.selectedHero = cluster;
    this.mensajeService.add(`ClustersComponent: Selected cluster id=${cluster.distancia}`);
  }

  getClusters(): void {
    this.checked = true;
    if(!this.checkEmpty()){
      this.dialog.open(DialogElementsExampleDialog);
      return;
    }

    this.setCluster();

    console.log(this.grillas);
    console.log(this.clusters);
    let salida = this.clusterService.getClusters(parseInt(this.selectedDistance), this.grillas);
    console.log(salida);
    salida.subscribe(res => { 
      this.cluster_result = res["cluster"]; 
      console.log(this.cluster_result);
      
    });
  } 

  checkEmpty(): boolean{
    let salida = false;
    for (let i = 0; i < 11; i++) {
      for (let j = 0; j < 11; j++) {
        if(this.clusters[i][j] === true){
          salida=salida || true;
        }        
      }
    }
    return salida;
  }

  setEmpty(): void{
    this.checked = false;
    for (let i = 0; i < 11; i++) {
      for (let j = 0; j < 11; j++) {
        this.clusters[i][j] = false;        
      }
    }
    return;
  }

  setFill(): void{
    this.checked = false;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.clusters[i][j] = true;        
      }
    }
    return;
  }

  setCluster(): void{
    this.grillas = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if(this.clusters[i][j] === true){
          this.grillas.push([i,j]);
        }        
      }
    }
    return;
  }

  getClusterScenario1(): void {
    this.setDefaultCluster();
    this.selectedDistance = "1";
    this.getClusters();
  }

  getClusterScenario3(): void {
    this.setDefaultCluster();
    this.selectedDistance = "3";
    this.getClusters();
  }
  getClusterScenario5(): void {
    this.setDefaultCluster();
    this.selectedDistance = "5";
    this.getClusters();
  }

  setDefaultCluster(): void {
    this.setEmpty();
    this.clusters[0][1]= true;
    this.clusters[0][2]= true;
    this.clusters[2][3]= true;
    this.clusters[4][3]= true;
    this.clusters[7][3]= true;
    this.clusters[8][5]= true;
    this.clusters[8][7]= true;
    this.clusters[8][8]= true;

  }
}
  
@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html'
})
export class DialogElementsExampleDialog {}
