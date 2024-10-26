import { Component, OnInit } from '@angular/core';
import { Topic } from '../../models/Topic';
import { TopicService } from '../../services/topic.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-topic',
  
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css'
})
export class TopicComponent implements OnInit {

  listTopics: Topic[] = [];
  selectedTopic!: Topic;
  constructor(private topicService: TopicService, private http: HttpClient) { }

  ngOnInit(): void {   
    this.list(); 
  }

  list(){
    this.topicService.getTopics().subscribe(resp=>{
      if(resp){
        this.listTopics= resp;
      }
    });
  }

  selectTopic(id: number): void {
    this.topicService.getTopicById(id).subscribe((topic: Topic)=>{
        this.selectedTopic = topic;
    })
  }

  edit():void{
    console.log(this.selectedTopic);
    this.topicService.updateTopic(this.selectedTopic).subscribe(()=>{
      this.list();
    });
  }
}
