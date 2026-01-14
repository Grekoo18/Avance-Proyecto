import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonIcon, IonCol, IonCard, IonRow, IonGrid, IonContent, IonTitle, IonBackButton, IonButtons, IonToolbar, IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  imports: [RouterModule, IonButton, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonIcon, IonCol, IonCard, IonRow, IonGrid, IonContent, IonTitle, IonBackButton, IonButtons, IonToolbar, IonHeader],
})
export class ProductosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  onContratar(servicio: string) {
    window.alert(`Has seleccionado: ${servicio}`);
  }

}
