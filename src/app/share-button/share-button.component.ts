import { Component, OnInit } from '@angular/core';
import { ShareButtonSEOService } from './share-button-seo.service';

@Component({
  selector: 'app-share-button',
  templateUrl: './share-button.component.html',
  styleUrls: ['./share-button.component.scss']
})

export class ShareButtonComponent implements OnInit {

  navUrl: string;
  constructor(public shareButtonSEOServies: ShareButtonSEOService) { }

  ngOnInit(): void {
  }

  shareTitleSocialMedia(type: string) {
    const FACEBOOK_SHARE_LINK = "https://www.facebook.com/sharer/sharer.php?<params>";
    const TWITTER_SHARE_LINK = "https://twitter.com/share?<params>";
    // const EMAIL_SHARE_LINK = "mailto:?subject=<subject>&body=<body>";
    const SOCIAL_MEDIA_LIST = {
      FACEBOOK: 'facebook',
      TWITTER: 'twitter',
      EMAIL: 'email',
      COPY_LINK: 'copyLink'
    }
    let searchParams = new URLSearchParams();
    const shareUrl = window.location.href;
    const { FACEBOOK, TWITTER, EMAIL, COPY_LINK } = SOCIAL_MEDIA_LIST;
    // const shareData = {
    //   seo: {
    //     title: 'Home Page | Dynamic Title and Meta Tags Demo',
    //     metaTags: [
    //       { name: 'description', content: 'Game of Thrones Quotes : Winter is Coming, You know nothing Jon Snow, Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you' },
    //       { property: 'og:title', content: 'GOT Home Page ⚔' },
    //       { proprety: 'og:description', content: 'Game of Thrones Quotes : Winter is Coming, You know nothing Jon Snow, Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you' },
    //       { property: 'og:image', content: 'https://contentcafecloud.baker-taylor.com/Jacket.svc/F96D7B80-0E02-4F68-BDFC-6D9C11FD60A6/9781617589201/Medium/Logo' },
    //       { property: 'og:url', content: "https://kidsnyc.axis360qa2.baker-taylor.com/ng/view/title/0012452877/9781617589201" },
    //       { name: "twitter:card", content: "summary_large_image" },
    //     ]
    //   }
    // }
    // let seoData = shareData['seo']
    // this.shareButtonSEOServies.updateTitle(seoData['title']);
    // this.shareButtonSEOServies.updateMetaTags(seoData['metaTags']);
    switch (type) {
      case FACEBOOK:
        searchParams.set('u', "https://kidsnyc.axis360qa2.baker-taylor.com/ng/view/title/0012452877/9781617589201");
        this.navUrl = FACEBOOK_SHARE_LINK.replace('<params>', searchParams.toString());
        window.open(this.navUrl, '_blank');
        break;
      case TWITTER:
        searchParams.set('url', shareUrl);
        this.navUrl = TWITTER_SHARE_LINK.replace('<params>', searchParams.toString());
        window.open(this.navUrl, '_blank');
        break;
      case EMAIL:
        window.alert('EMail')
        break;
      case COPY_LINK:
        window.alert('Copy_LINK')
        break;
      default:
        break;
    }
  }


}
