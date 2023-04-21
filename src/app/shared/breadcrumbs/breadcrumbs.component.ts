import { Component } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { map } from 'rxjs';
import { filter } from 'rxjs';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {

  public titulo!:string;

  constructor(private router:Router) {
    this.router.events
    .pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      // filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
      map((event:ActivationEnd) => event.snapshot.data)
    ).subscribe(
      console.log);
  }


}
