import { track, LightningElement } from "lwc";

export default class App extends LightningElement {
  @track selectedTab = 0;
  @track tabs = 
  [{ tabId: 1, name: 'Tab 1', 
  columns:[
    {fieldpath: '1', label:'Column 1'},
    {fieldpath: '2', label:'Column 2'},
    {fieldpath: '3', label:'Column 3'}
    ]},
  { tabId: 2, name: 'Tab 2', 
  columns:[
    {fieldpath: '4', label:'Column 4', type :'TEXTAREA'},
    {fieldpath: '5', label:'Column 5',
    picklistValues : '[{"value":"","label":"Select"},{"value":"Full","label":"Full"},{"value":"Custom","label":"Custom"}]',
    type: 'PICKLIST'},
    {fieldpath: '6', label:'Column 6'}
    ]},
  { tabId: 3, name: 'Tab 3', 
  columns:[
    {fieldpath: '7', label:'Column 7'},
    {fieldpath: '8', label:'Column 8'},
    {fieldpath: '9', label:'Column 9'}
    ]},
  { tabId: 4, name: 'Tab 4', 
  columns:[
    {fieldpath: '1', label:'Column 1'},
    {fieldpath: '5', label:'Column 5'},
    {fieldpath: '9', label:'Column 9'}
    ]}
  ];

  @track dataArray = 
  [
    {
      item: 1, 
      fields:[
        {fieldpath: '1',value: 'item 1 - value for column 1'},
        {fieldpath: '2',value: 'item 1 - value for column 2'},
        {fieldpath: '3',value: 'item 1 - value for column 3'},
        {fieldpath: '4',value: 'item 1 - value for column 4'},
        {fieldpath: '5',value: 'item 1 - value for column 5'},
        {fieldpath: '6',value: 'item 1 - value for column 6'},
        {fieldpath: '7',value: 'item 1 - value for column 7'},
        {fieldpath: '8',value: 'item 1 - value for column 8'},
        {fieldpath: '9',value: 'item 1 - value for column 9'},
      ]
    },
    {
      item: 2, 
      fields:[
        {fieldpath: '1',value: 'item 2 - value for column 1'},
        {fieldpath: '2',value: 'item 2 - value for column 2'},
        {fieldpath: '3',value: 'item 2 - value for column 3'},
        {fieldpath: '4',value: 'item 2 - value for column 4'},
        {fieldpath: '5',value: 'item 2 - value for column 5'},
        {fieldpath: '6',value: 'item 2 - value for column 6'},
        {fieldpath: '7',value: 'item 2 - value for column 7'},
        {fieldpath: '8',value: 'item 2 - value for column 8'},
        {fieldpath: '9',value: 'item 2 - value for column 9'},
      ]
    },
    {
      item: 3, 
      fields:[
        {fieldpath: '1',value: 'item 3 - value for column 1'},
        {fieldpath: '2',value: 'item 3 - value for column 2'},
        {fieldpath: '3',value: 'item 3 - value for column 3'},
        {fieldpath: '4',value: 'item 3 - value for column 4'},
        {fieldpath: '5',value: 'item 3 - value for column 5'},
        {fieldpath: '6',value: 'item 3 - value for column 6'},
        {fieldpath: '7',value: 'item 3 - value for column 7'},
        {fieldpath: '8',value: 'item 3 - value for column 8'},
        {fieldpath: '9',value: 'item 3 - value for column 9'},
      ]
    }
  ];

  get tabSetup(){
    return JSON.stringify(this.tabs)
  }

  get dataSetup(){
    return JSON.stringify(this.dataArray)
  }

  handleItemBlurredTabSetup(event){
    if(event.target.value){
      this.tabs = JSON.parse(event.target.value);
    }
  }

  handleItemBlurredDataSetup(event){
    if(event.target.value){
      this.dataArray = JSON.parse(event.target.value);
    }
  }


  handleCellChanged(event){
    let result = event.detail.result;
    let record = event.detail.record;
    record.fields.find( f => f.fieldpath === result.fieldpath).value = result.value;
    this.dataArray = this.unproxy(this.dataArray);
    this.dataArray.find( d => d.item == record.item).fields = record.fields;
    this.dataArray = [...this.dataArray];
  }

  get data(){
    return this.dataArray;
  }


  handleItemClicked(event) {
    this.selectedTab = parseInt(event.target.getAttribute("data-index"));
  }

  unproxy(value){
    if(value){
      return JSON.parse(JSON.stringify(value));
    }
    return null;
  }
}
