import { api, track, LightningElement } from "lwc";

export default class Cell extends LightningElement {
  @api record;
  @api column;
  @track field;

  connectedCallback(){
    this.field = this.result;
  }

  get result(){
    if(this.record && this.column){
      let field = this.record.fields.find( f => f.columnId === this.column.columnId);
      if(field){
        return this.unproxy(field);
      }
    }
    return {value:''}; //?
  }

  itemChanged(event){
    this.field.value = event.target.value;
    const cellChangeEvent = new CustomEvent('cellchange', {
        detail: {
          result: this.field,
          record: this.record
      },

    });
    console.log('dispatched');
    this.dispatchEvent(cellChangeEvent);
  }

  unproxy(value){
    if(value){
      return JSON.parse(JSON.stringify(value));
    }
    return null;
  }
}