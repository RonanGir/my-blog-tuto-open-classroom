import { Injectable, OnInit } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService implements OnInit {
  p1: any = new Post(1, "3 Mistakes In BLOG That Make You Look Dumb", "Iis igitur est difficilius satis facere, qui se Latina scripta dicunt contemnere. in quibus hoc primum est in quo admirer", 0, 0);
  p2: any = new Post(2, "3 BLOG Secrets You Never Knew", "Iis igitur est difficilius satis facere, qui se Latina scripta dicunt contemnere. in quibus hoc primum est in quo admirer, cur in gravissimis rebus non delectet eos sermo patrius, cum idem fabellas Latinas ad verbum e Graecis expressas non inviti legant. quis enim tam inimicus paene nomini Romano est, qui Ennii Medeam aut Antiopam Pacuvii spernat aut reiciat, quod se isdem Euripidis fabulis delectari dicat, Latinas litteras oderit?", 3, 2);
  p3: any = new Post(3, "Open The Gates For BLOG By Using These Simple Tips", "Iis igitur est difficilius satis facere, qui se Latina scripta dicunt contemnere. in quibus hoc primum est in quo admirer,  quis enim tam inimicus paene nomini Romano est, qui Ennii Medeam aut Antiopam Pacuvii spernat aut reiciat, quod se isdem Euripidis fabulis delectari dicat, Latinas litteras oderit?", 0, 3);
  p4: any = new Post(4, "5 Best Ways To Sell BLOG", "Iis igitur est difficilius satis facere, qui se Latina scripta dicunt contemnere. in quibus hoc primum est in quo admirer, cur in gravissimis rebus non delectet eos sermo patrius, cum idem fabellas Latinas ad verbum e Graecis expressas non inviti legant. quis enim tam inimicus paene nomini Romano est, qui Ennii Medeam aut Antiopam Pacuvii spernat aut reiciat, quod se isdem Euripidis fabulis delectari dicat, Latinas litteras oderit?", 9, 2);
  p5: any = new Post(5, "15 Lessons About BLOG You Need To Learn To Succeed", "In quibus hoc primum est in quo admirer, cur in gravissimis rebus non delectet eos sermo patrius, reiciat, quod se isdem Euripidis fabulis delectari dicat, Latinas litteras oderit?", 2, 0);
  posts: any[] = [this.p1, this.p2, this.p3, this.p4, this.p5];


  constructor() { }

  ngOnInit() {
  }

  addLoveIt(id: number): void {
    console.log(id);
    for (let post of this.posts) {
      if (post.id == id) post.loveIts = post.loveIts + 1;
    }
  }

  addDontLoveIt(id: number): void {
    for (let post of this.posts) {
      if (post.id == id) post.dontLoveIts = post.dontLoveIts + 1;
    }
  }


}
