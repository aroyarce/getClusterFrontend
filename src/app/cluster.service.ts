import { Injectable } from '@angular/core';
import { Grid } from './cluster';
import { Cluster } from './cluster';
import { GRILLAS } from './mock-cluster';
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensaje.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

//Angular material
//Dialog para ayuda
//Checkbos para grilla
//Botton para mas bonito
//Divider para separar pruebas y caja de boxes
//Autocomplete para distancia
//Expansion panel para bonito el grilla
//Grid lista para grillas
//input para ver error de distancia con error inmediato
//List with selecction para unit test
//Menu para options
//progress spinner para obtener cluster
//Select mejor para distancia
//Slider para distancia, pero select es mejor
//Snackbar para respuestas
//Tab para separar las funciones
//Tooltip para ayuda


@Injectable({
  providedIn: 'root'
})
export class ClusterService {

  //private clusterUrl = 'api/heroes';  // URL to web api
  //private clusterUrl = "https://1q06uua1vh.execute-api.us-east-1.amazonaws.com/cluster";  // URL to web api
  private clusterUrl = "/cluster/recurso";  // URL to web api
  
  private headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Access-Control-Allow-Origin", "*/*")
    .set("Accept", "*/*")
    .set("Access-Control-Allow-Methods", "*/*");

  constructor(private http: HttpClient, private mensajeService: MensajeService) { }

  //Any Data Type
  getClusters(distancia: number, grillas: number[][]): Observable<Cluster> {
    let params = new HttpParams()
      .set('d', distancia);

    for (let index = 0; index < grillas.length; index++) {
      let aux: String = grillas[index][0].toString()+grillas[index][0].toString()
      params = params.append('grid', "["+grillas[index].toString()+"]");
    }

    const httpOptions = {
      headers: this.headers,
      params: params,
      responseType: 'json' as const,
      withCredentials: false
    };
    let respuesta = this.http.get<Cluster>(this.clusterUrl, httpOptions);
    console.log("Listo get");
    return this.http.get<Cluster>(this.clusterUrl, httpOptions);
  }

  /** Log a HeroService message with the MessageService */
  private log(mensaje: string) {
    this.mensajeService.add(`HeroService: ${mensaje}`);
  }

}
