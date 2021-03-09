function DomElement(selector, heightObj, widthObj, bgObj, fontSizeObj, text){
  this.selector = selector;
  this.heightObj = heightObj;
  this.widthObj = widthObj;
  this.bgObj = bgObj;
  this.fontSizeObj = fontSizeObj;
  this.text = text;
}

DomElement.prototype.create = function(){
  if (this.selector[0] === "."){
    let div = document.createElement('div');
    div.className = this.selector.value;
    div.style.cssText = `height: ${this.heightObj}; width: ${this.widthObj}; background-color: ${this.bgObj}; font-size:    ${this.fontSizeObj};`;
    div.textContent = this.text;  
    document.body.append(div);
  }
  if (this.selector[0] === "#") {
    let div = document.createElement('p');
    div.id = this.selector.value;
    div.style.cssText = `height: ${this.heightObj}; width: ${this.widthObj}; background-color: ${this.bgObj}; font-size: ${this.fontSizeObj};`;
    div.textContent = this.text;
    document.body.append(div);
  }
};

let domElement1 = new DomElement('.newElem', '200px', '600px', 'yellow', '20px', 'Ура получилось!');

domElement1.create();
