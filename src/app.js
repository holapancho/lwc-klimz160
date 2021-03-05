import { track, LightningElement } from "lwc";

export default class App extends LightningElement {
  @track selectedTab = 0;
  @track tabs = 
  [{ tabId: 1, name: 'Tab 1', 
  columns:[
    {fieldpath: '1', label:'Artist (Picklist)',
      picklistValues : '[{"value":"","label":"Select"},{"value":"bb","label":"Bad Bunny"},{"value":"jb","label":"J Balvin"},{"value":"dl","label":"Dua Lipa"}]',
      type: 'PICKLIST'},
    {fieldpath: '2', label:'Date',type:'DATE'},
    {fieldpath: '3', label:'Double',precision:12,scale:2,type:'DOUBLE'}
    ]},
  { tabId: 2, name: 'Tab 2', 
  columns:[
    {fieldpath: '4', label:'Text area', type :'TEXTAREA', lenght: 50},
    {fieldpath: '5', label:'Boolean', type :'BOOLEAN'},
    {fieldpath: '6', label:'Currency',precision:18,scale:9,type:'CURRENCY'}
    ]},
  { tabId: 3, name: 'Tab 3', 
  columns:[
    {fieldpath: '7', label:'Percent',precision:18,scale:9,type:'PERCENT'},
    {fieldpath: '8', label:'Date with time',type:'DATETIME'},
    {fieldpath: '9', label:'Column 9'}
    ]},
  { tabId: 4, name: 'Tab 4', 
  columns:[
     {fieldpath: '1', label:'Artist',
      picklistValues : '[{"value":"","label":"Select"},{"value":"bb","label":"Bad Bunny"},{"value":"jb","label":"J Balvin"},{"value":"dl","label":"Dua Lipa"}]',
      type: 'PICKLIST'},
    {fieldpath: '5', label:'Column 5', type :'BOOLEAN'},
    {fieldpath: '9', label:'Column 9'}
    ]},
     { tabId: 5, name: 'Tab 5', 
  columns:[
     {fieldpath: '10', label:'Artist',
      picklistValues : '[{"value":"","label":"Select"},{"value":"bb","label":"Bad Bunny"},{"value":"jb","label":"J Balvin"},{"value":"dl","label":"Dua Lipa"}]',
      type: 'MULTIPICKLIST'}
    ]},
  ];

  @track dataArray = 
  [
    {
      id: 1, 
      fields:[
        {fieldpath: '1',value: ''},
        {fieldpath: '2',value: '2021-03-04'},
        {fieldpath: '3',value: 12.12},
        {fieldpath: '4',value: 'item 1 - value for column 4'},
        {fieldpath: '5',value: true},
        {fieldpath: '6',value: 1222.14542},
        {fieldpath: '7',value: 1},
        {fieldpath: '8',value: ''},
        {fieldpath: '9',value: 'item 1 - value for column 9'},
        {fieldpath: '10',value: 'bb'},
        {fieldpath: '11',value: 'item 1 - value for column 11'}
      ]
    },
    {
      id: 2, 
      fields:[
        {fieldpath: '1',value: 'bb'},
        {fieldpath: '2',value: ''},
        {fieldpath: '3',value: 1222.12},
        {fieldpath: '4',value: 'item 2 - value for column 4'},
        {fieldpath: '5',value: false},
        {fieldpath: '6',value: 1222.12},
        {fieldpath: '7',value: 2.222},
        {fieldpath: '8',value: '2021-03-05T12:25:00.000Z'},
        {fieldpath: '9',value: 'item 2 - value for column 9'},
        {fieldpath: '10',value: ''},
        {fieldpath: '11',value: 'item 2 - value for column 11'}
      ]
    },
    {
      id: 3, 
      fields:[
        {fieldpath: '1',value: 'jb'},
        {fieldpath: '2',value: '2021-03-05'},
        {fieldpath: '3',value: 0},
        {fieldpath: '4',value: 'item 3 - value for column 4'},
        {fieldpath: '5',value: true},
        {fieldpath: '6',value: 0.1},
        {fieldpath: '7',value: 3.5},
        {fieldpath: '8',value: ''},
        {fieldpath: '9',value: 'item 3 - value for column 9'},
        {fieldpath: '10',value: 'bb;jb'},
        {fieldpath: '11',value: 'item 3 - value for column 11'}
      ]
    },
    {
      id: 4, 
      fields:[
        {fieldpath: '1',value: 'dl'},
        {fieldpath: '2',value: '2021-03-06'},
        {fieldpath: '3',value: 5},
        {fieldpath: '4',value: 'item 4 - value for column 4'},
        {fieldpath: '5',value: false},
        {fieldpath: '6',value: 11},
        {fieldpath: '7',value: 0},
        {fieldpath: '8',value: '2021-03-06T12:25:00.000Z'},
        {fieldpath: '9',value: 'item 4 - value for column 9'},
        {fieldpath: '10',value: 'bb;jb;dl'},
        {fieldpath: '11',value: 'item 4 - value for column 11'}
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
    this.dataArray.find( d => d.id == record.id).fields = record.fields;
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
