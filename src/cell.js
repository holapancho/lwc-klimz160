import { api, track, LightningElement } from "lwc";

export default class Cell extends LightningElement {
  @api record;
  @api column;
  @track result;

  connectedCallback(){
    if(this.record && this.column){
      let result = this.record.fields.find( f => f.columnId === this.column.columnId);
      if(result){
        this.result = this.unproxy(result);
      }
    }
  }

  itemChanged(event){
    this.result.value = event.target.value;
    const cellChangeEvent = new CustomEvent('cellchange', {
        detail: {
          result: this.result,
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