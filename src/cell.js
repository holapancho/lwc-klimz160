import { api, track, LightningElement } from "lwc";

export default class Cell extends LightningElement {
  @api record;
  @api column;
  @track field;
  @track fieldType;
  @track picklistValues;

  connectedCallback(){
    this.field = this.result;
    let column = this.unproxy(this.column);
    this.fieldType = column.type || '';
    if(this.fieldType === 'PICKLIST' && column.picklistValues){
      this.picklistValues = JSON.parse(column.picklistValues);
      console.log(this.unproxy(this.picklistValues));
    }
  }

  get result(){
    if(this.record && this.column){
      let field = this.record.fields.find( f => f.fieldpath === this.column.fieldpath);
      if(field){
        return this.unproxy(field);
      }
    }
    return {value:''}; //?
  }

  get isPicklist(){
    return this.fieldType === 'PICKLIST';
  }

  get isTextArea(){
    return this.fieldType === 'TEXTAREA';
  }

  get isInput(){
    return this.fieldType === '';
  }

  handleChange(event) {
    this.field.value = event.detail.value;
    const cellChangeEvent = new CustomEvent('cellchange', {
      detail: {
          result: this.field,
          record: this.record
      },
      });
    this.dispatchEvent(cellChangeEvent);
  }

  itemChanged(event){
    this.field.value = event.target.value;
    const cellChangeEvent = new CustomEvent('cellchange', {
        detail: {
          result: this.field,
          record: this.record
      },
    });
    this.dispatchEvent(cellChangeEvent);
  }

  unproxy(value){
    if(value){
      return JSON.parse(JSON.stringify(value));
    }
    return null;
  }
}