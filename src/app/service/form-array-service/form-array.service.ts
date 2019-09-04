import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Album} from '../../models/album.model';
import {map} from 'rxjs/operators';
import {FormArray} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormArrayService {

  constructor(private  http: HttpClient) {
  }

  getAllData(): Observable<Album[]> {
    const url = 'https://jsonplaceholder.typicode.com/albums';
    return this.http.get<Album[]>(url)
      .pipe(
        map((albums: Album[]) => {
          return albums.slice(8, 12);
        })
      );
  }

  getAllAsFormArray(): Observable<FormArray> {
    return this.getAllData().pipe(map((albums: Album[]) => {
      const fgs = albums.map(Album.asFormGroup);
      return new FormArray(fgs);
    }));
  }
}
