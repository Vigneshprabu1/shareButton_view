import { Component,OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { ShareButtonSEOService } from './share-button/share-button-seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'btnsharedemo';
constructor(private router: Router, private activatedRoute: ActivatedRoute,public shareButtonSEOServies: ShareButtonSEOService){}
ngOnInit(): void{
  this.router.events.pipe(
    filter(e => e instanceof NavigationEnd),
    map(e=> this.activatedRoute),
    map((route) => {
      while (route.firstChild) route = route.firstChild;
      return route;
    }),
    filter((route) => route.outlet === 'primary'),
    mergeMap((route) => route.data),
  ).subscribe(data=> {
    let seoData = data['seo'];
    console.log('seoData',seoData);
    this.shareButtonSEOServies.updateTitle(seoData['title']);
    this.shareButtonSEOServies.updateMetaTags(seoData['metaTags']);
  })
}
}
