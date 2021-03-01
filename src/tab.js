import { track, api, LightningElement } from "lwc";

export default class Tab extends LightningElement {
  @api tab;
  @api position;
  @api selectedTab;

  get selected(){
    if(this.selectedTab===this.position){
      return true;
    }
    else{
      return false;
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
      return "slds-tabs_scoped__item slds-is-active tab-borders-selected";
    }else{
      return "slds-tabs_scoped__item tab-borders";
    }
  }

  get ariaControls(){
    return "tab-scoped-"+this.position;
  }

}