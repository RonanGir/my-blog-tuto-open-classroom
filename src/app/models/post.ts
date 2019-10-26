export class Post {

  id: number;
  title: string;
  content: string;
  loveIts: number;
  dontLoveIts: number;
  created_at: Date;

  constructor(id: number, title: string, content: string, loveIts: number, dontLoveIts: number, created_at?: Date){
    this.id          = id;
    this.title       = title;
    this.content     = content;
    this.loveIts     = loveIts;
    this.dontLoveIts = dontLoveIts
    this.created_at  = new Date();
  }

}
