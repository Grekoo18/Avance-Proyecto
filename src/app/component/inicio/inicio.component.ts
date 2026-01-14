import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButton, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonCard, IonIcon, IonRow, IonGrid, IonContent, IonTitle, IonToolbar, IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  imports: [RouterModule, IonButton, IonCardContent, IonCardTitle, IonCardHeader, IonCol, IonCard, IonIcon, IonRow, IonGrid, IonContent, IonTitle, IonToolbar, IonHeader],
})
export class InicioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
