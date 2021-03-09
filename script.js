function DomElement(selector, heightObj, widthObj, bgObj, fontSizeObj){
  this.selector = selector;
  this.heightObj = heightObj;
  this.widthObj = widthObj;
  this.bgObj = bgObj;
  this.fontSizeObj = fontSizeObj;
}

DomElement.prototype.create = function(){
  if (this.selector[0] === "."){
    let div = document.createElement('div');
    div.className = this.selector.value;
    div.style.cssText = 'height: heightObj; width: widthObj; background-color: bgObj; font-size: fontSizeObj;';
  }
  if (this.selector[0] === "#") {
    let div = document.createElement('p');
    div.id = this.selector.value;
    div.style.cssText = 'height: heightObj; width: widthObj; background-color: bgObj; font-size: fontSizeObj;';
  }
};

let domElement1 = new DomElement('.newElem', '200px', '600px', 'yellow', '20px');

domElement1.create();
