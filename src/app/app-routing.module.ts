import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShareButtonComponent } from './share-button/share-button.component';


const routes: Routes = [
  { path: '', component: ShareButtonComponent, data:{
    seo: {
      title: 'Home Page | Dynamic Title and Meta Tags Demo',
      metaTags: [
        { name: 'description', content: 'Game of Thrones Quotes : Winter is Coming, You know nothing Jon Snow, Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you' },
        { property: 'og:title', content: 'GOT Home Page ⚔' },
        { proprety: 'og:description', content: 'Game of Thrones Quotes : Winter is Coming, You know nothing Jon Snow, Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you' },
        { property: 'og:image', content: 'https://contentcafecloud.baker-taylor.com/Jacket.svc/F96D7B80-0E02-4F68-BDFC-6D9C11FD60A6/9781617589201/Medium/Logo' },
        { property: 'og:url', content: "https://kidsnyc.axis360qa2.baker-taylor.com/ng/view/title/0012452877/9781617589201" },
        { name: "twitter:card", content: "summary_large_image" },
      ]
    }
  } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
