import { track, LightningElement } from "lwc";

export default class App extends LightningElement {
  @track selectedTab = 0;
  @track tabs = 
  [{ tabId: 1, name: 'Tab 1', 
  columns:[
    {columnId: '1', name:'Column 1'},
    {columnId: '2', name:'Column 2'},
    {columnId: '3', name:'Column 3'}
    ]},
  { tabId: 2, name: 'Tab 2', 
  columns:[
    {columnId: '4', name:'Column 4'},
    {columnId: '5', name:'Column 5'},
    {columnId: '6', name:'Column 6'}
    ]},
  { tabId: 3, name: 'Tab 3', 
  columns:[
    {columnId: '7', name:'Column 7'},
    {columnId: '8', name:'Column 8'},
    {columnId: '9', name:'Column 9'}
    ]},
  { tabId: 4, name: 'Tab 4', 
  columns:[
    {columnId: '1', name:'Column 1'},
    {columnId: '5', name:'Column 5'},
    {columnId: '9', name:'Column 9'}
    ]}
  ];

  @track dataArray = 
  [
    {
      item: 1, 
      fields:[
        {columnId: '1',value: 'item 1 - value for column 1'},
        {columnId: '2',value: 'item 1 - value for column 2'},
        {columnId: '3',value: 'item 1 - value for column 3'},
        {columnId: '4',value: 'item 1 - value for column 4'},
        {columnId: '5',value: 'item 1 - value for column 5'},
        {columnId: '6',value: 'item 1 - value for column 6'},
        {columnId: '7',value: 'item 1 - value for column 7'},
        {columnId: '8',value: 'item 1 - value for column 8'},
        {columnId: '9',value: 'item 1 - value for column 9'},
      ]
    },
    {
      item: 2, 
      fields:[
        {columnId: '1',value: 'item 2 - value for column 1'},
        {columnId: '2',value: 'item 2 - value for column 2'},
        {columnId: '3',value: 'item 2 - value for column 3'},
        {columnId: '4',value: 'item 2 - value for column 4'},
        {columnId: '5',value: 'item 2 - value for column 5'},
        {columnId: '6',value: 'item 2 - value for column 6'},
        {columnId: '7',value: 'item 2 - value for column 7'},
        {columnId: '8',value: 'item 2 - value for column 8'},
        {columnId: '9',value: 'item 2 - value for column 9'},
      ]
    },
    {
      item: 3, 
      fields:[
        {columnId: '1',value: 'item 3 - value for column 1'},
        {columnId: '2',value: 'item 3 - value for column 2'},
        {columnId: '3',value: 'item 3 - value for column 3'},
        {columnId: '4',value: 'item 3 - value for column 4'},
        {columnId: '5',value: 'item 3 - value for column 5'},
        {columnId: '6',value: 'item 3 - value for column 6'},
        {columnId: '7',value: 'item 3 - value for column 7'},
        {columnId: '8',value: 'item 3 - value for column 8'},
        {columnId: '9',value: 'item 3 - value for column 9'},
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
    record.fields.find( f => f.columnId === result.columnId).value = result.value;
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
