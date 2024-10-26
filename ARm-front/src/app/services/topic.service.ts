import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Topic } from '../models/Topic';


@Injectable({
  providedIn: 'root'
})
export class TopicService {

  private apiUrl = 'http://localhost:8080/topic'
  private apiUrlAll = 'http://localhost:8080/topics'

  constructor(private http: HttpClient) { }

  // get all topics
  getTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.apiUrlAll);
  }

  // get one topic by his id
  getTopicById(id: number): Observable<Topic> {
    return this.http.get<Topic>(`${this.apiUrl}?id=${id}`);
  }

  // create a new topic
  createTopic(Topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(this.apiUrl, Topic);
  }

  // update a topic
  updateTopic(Topic: Topic): Observable<Topic> {
    return this.http.put<Topic>(`${this.apiUrl}`, Topic);
  }

  // delete a topic
  deleteTopic(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}?id=${id}`);
  }
}
