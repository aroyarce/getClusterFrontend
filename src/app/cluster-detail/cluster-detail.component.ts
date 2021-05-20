import { Component, OnInit, Input } from '@angular/core';
import { Grid } from '../cluster';

@Component({
  selector: 'app-cluster-detail',
  templateUrl: './cluster-detail.component.html',
  styleUrls: ['./cluster-detail.component.scss']
})
export class ClusterDetailComponent implements OnInit {

  @Input() grid?: Grid;

  constructor() { }

  ngOnInit(): void {
  }

}
