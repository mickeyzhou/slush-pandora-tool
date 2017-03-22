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
    this.assign({
      "commonJs": assets["common"]["js"], 
      "pageJs": assets[http.controller]["js"]
    });
    //auto render template file index_index.html
    return this.display();
  }
}