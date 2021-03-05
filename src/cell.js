import { api, track, LightningElement } from "lwc";

export default class Cell extends LightningElement {
  @api record;
  @api column;
  @track field;
  @track fieldType;
  @track lenght;
  @track picklistValues;
  @track scale;

  connectedCallback(){
    let column = this.unproxy(this.column);
    this.fieldType = column.type || 'INPUT';
    this.lenght = column.lenght || 0;
    this.scale = column.scale || 0;
    if(this.isPicklist && column.picklistValues){
      this.picklistValues = JSON.parse(column.picklistValues);
    }
    //keep a read only copy of this field
    this.field = this.result;
  }

  get result(){
    if(this.record && this.column && this.fieldType){
      let field = this.record.fields.find( f => f.fieldpath === this.column.fieldpath);
      if(field){
        let aField = this.unproxy(field);
        return aField;
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

  get isCheckbox(){
    return this.fieldType === 'BOOLEAN';
  }

  get isDate(){
    return this.fieldType === 'DATE';
  }

  get isDateTime(){
    return this.fieldType === 'DATETIME';
  }

  get isDouble(){
    return this.fieldType === 'DOUBLE';
  }

  get isInput(){
    return this.fieldType === 'INPUT';
  }

  get step(){
    if(this.scale){
      let step = ".";
      for (let i = 0; i < this.scale; i++) {
        if ((i+1) === this.scale) {
          step += "1";
        }
        else{
          step += "0";
        }
      }
      console.log(step);
      return step;
    }
    return ".";
  }

  handlePicklistChange(event) {
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
     if(this.isCheckbox){
      this.field.value = event.detail.checked;
    }
    else{
      this.field.value = event.target.value;
    }
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