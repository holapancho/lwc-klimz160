import { api, track, LightningElement } from "lwc";

export default class Cell extends LightningElement {
  @api record;
  @api column;
  @track field;
  @track fieldType;
  @track lenght;
  @track picklistValues = [];
  @track actionValues = [];
  @track scale;
  @track isReadOnly;

  connectedCallback(){
    let column = this.unproxy(this.column);
    this.fieldType = column.type; 
    this.lenght = column.lenght || 0;
    this.scale = column.scale || 0;
    this.isReadOnly = column.isCalculated || false;
    if((this.isPicklist || this.isMultiPicklist) && column.picklistValues){
      this.picklistValues = JSON.parse(column.picklistValues);
    }
    else if(this.isActionsMenu){
      this.actionValues = JSON.parse(column.actionValues).map((action, index) => ({...action,id: action.value+index+this.record.id+column.id}));
    }
    //keep a read only copy of this field
    this.field = this.result;
  }

  get result(){
    if(this.record && this.column && this.fieldType){
      let field = this.record.fields.find( f => f.fieldpath === this.column.fieldpath);
      if(field){
        let aField = this.unproxy(field);
        if(this.isMultiPicklist){
            if(aField.value){
              aField.multiPicklist = aField.value.split(';');
            }
            else{
              aField.multiPicklist = [];
            }
        }
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

  get isCurrency(){
    return this.fieldType === 'CURRENCY';
  }

  get isPercent(){
    return this.fieldType === 'PERCENT';
  }

  get isMultiPicklist(){
    return this.fieldType === 'MULTIPICKLIST';
  }

  get isString(){
    return this.fieldType === 'STRING';
  }

  get isActionsMenu(){
    return this.fieldType === 'ACTIONSMENU';
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
      return step;
    }
    return ".";
  }

  handleDualListBox(event){
    this.field.value = event.detail.value.join(";");
    const cellChangeEvent = new CustomEvent('cellchange', {
      detail: {
          result: this.field,
          record: this.record
      },
      });
    this.dispatchEvent(cellChangeEvent);
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

  handleMenuSelect(event) {
        // retrieve the selected item's value
        const selectedItemValue = event.detail.value;

        console.log(selectedItemValue);
    }

  unproxy(value){
    if(value){
      return JSON.parse(JSON.stringify(value));
    }
    return null;
  }
  
}