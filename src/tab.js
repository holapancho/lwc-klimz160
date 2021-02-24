import { track, api, LightningElement } from "lwc";

export default class Tab extends LightningElement {
  @api tab;
  @track selected = false;
  @api position;
  @api selectedTab;

  connectedCallback(){
    console.log(this.selectedTab);
    console.log('position'+this.position);
    if(this.selectedTab===this.position){
      this.selected=true;
    }
  }

  get tabIndex(){
    if(this.selected){
      return "0";
    }else{
      return "-1";
    }
  }

  get isActive(){
    if(this.selected){
      return "slds-tabs_scoped__item slds-is-active";
    }else{
      return "slds-tabs_scoped__item";
    }
  }

}