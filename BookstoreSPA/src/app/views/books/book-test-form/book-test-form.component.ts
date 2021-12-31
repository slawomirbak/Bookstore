import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KnowledgeService } from 'src/app/core/services/knowledge.service';

@Component({
  selector: 'app-book-test-form',
  templateUrl: './book-test-form.component.html',
  styleUrls: ['./book-test-form.component.scss']
})
export class BookTestFormComponent implements OnInit {

  constructor(private knowledgeService: KnowledgeService, private route: ActivatedRoute) { }

  test$ = this.knowledgeService.getSimle(`test/${+this.route.snapshot.paramMap.get('id')}`);

  ngOnInit(): void {
  }

}
