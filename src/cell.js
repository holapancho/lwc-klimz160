import { api, track, LightningElement } from "lwc";

export default class Cell extends LightningElement {
  @api record;
  @api column;
/*
  connectedCallback(){
    console.log(this.unproxy(this.record));
    console.log(this.unproxy(this.column));
  }
*/
  get valueToShow(){
    if(this.record && this.column){
      let record = this.unproxy(this.record);
      let column = this.unproxy(this.column);
      let result = record.fields.find( f => f.columnId === column.columnId);
      if(result){
        return result.value;
      }
    }
    return '';
  }

  unproxy(value){
    if(value){
      return JSON.parse(JSON.stringify(value));
    }
    return null;
  }
}