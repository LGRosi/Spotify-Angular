import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Hola mundo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAjEXLchWdqaIIimx9cpmeQW64YIbOV5G45VjUEiSVG79Mueaa4eZAGx5yScqv1ArCu3dMVpotFtQMyjqA'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
        .subscribe( data =>{
          console.log(data);
        });
  }
}
