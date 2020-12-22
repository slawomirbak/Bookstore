import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractRepositoryService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends AbstractRepositoryService {
  baseEndpoint = 'api/authors'
  constructor(http: HttpClient) {
    super(http);
  }
}
