'use strict';

import Base from './base.js';
var fs = require('fs');

export default class extends Base {
   init(...args) {
     let self = this;
     super.init(...args);
     let assets = fs.readFileSync('assets.json', 'utf8');
     if(assets){
      self.assets = JSON.parse(assets);
     }
   }
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    let http = this.http;
    let assets = this.assets;
    let isDev = think.env === 'development';
    let toolname = http.controller;
    this.assign({
      'isDev': isDev,
      "pageJs": isDev ? `${toolname}.js` : assets[toolname]["js"],
      "pageCss": isDev ? `${toolname}.css` : assets[toolname]["css"]
    });
    //auto render template file index_index.html
    return this.display();
  }
}