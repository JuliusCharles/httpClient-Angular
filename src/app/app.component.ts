import { Component } from '@angular/core';
import { SolicitudService } from './service/solicitud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';

  ENVIAR_JSON = {
    "name" : "Julio Carlos",
    "salary":"123",
    "age":24
  }

  constructor(private sS: SolicitudService){

    //Get
    sS.solicitudGet().subscribe(resp => {
      console.log('Resultado de GET: ',resp);
    });


    //Post
    sS.enviarPost(this.ENVIAR_JSON).subscribe(resp =>{
      console.log('Resultado de POST: ', resp);
    })



  }
}
