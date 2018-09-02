import { Injectable } from '@angular/core';
import { BASE_URI, URI } from '../../constants/uri.constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LaunchesService {
  private _baseUri: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this._baseUri = BASE_URI + URI.Launches;
  }

  getAllLaunches(): Observable<any[]> {
    return this.httpClient.get<any[]>(this._baseUri + 'all');
  }
}
