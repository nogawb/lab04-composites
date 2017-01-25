interface IDomElement {
  print();
}

class TextNode {
  console.print('</p>');

}

class DomElement {
  private tag:string;

  constructor(tag:string){
    this.tag = tag;
  }

  isTextNode(){
    if (this.tag == '<p>') {
      console.log(<p>)
      this.TextNode();
    }
  }
}

