import { track, api, LightningElement } from "lwc";

export default class Tab extends LightningElement {
  @api name;
  @api selected = false;

  get tabIndex(){
    if(this.selected){
      return "0";
    }else{
      return "-1";
    }
  }
}