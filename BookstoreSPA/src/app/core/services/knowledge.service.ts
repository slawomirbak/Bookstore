import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractRepositoryService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService extends AbstractRepositoryService {
  baseEndpoint = 'api/knowledge';
  constructor(http: HttpClient) {
    super(http);
  }
}
