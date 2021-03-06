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
    {fieldpath: '9', label:'Column 9',lenght:80,type:'STRING',sortable:true}
    ]},
  { tabId: 4, name: 'Tab 4', 
  columns:[
     {fieldpath: '1', label:'Artist',
      picklistValues : '[{"value":"","label":"Select"},{"value":"bb","label":"Bad Bunny"},{"value":"jb","label":"J Balvin"},{"value":"dl","label":"Dua Lipa"}]',
      type: 'PICKLIST'},
    {fieldpath: '5', label:'Column 5', type :'BOOLEAN'},
    {fieldpath: '9', label:'Column 9',lenght:80,type:'STRING',sortable:true}
    ]},
     { tabId: 5, name: 'Tab 5', 
  columns:[
     {fieldpath: '10', label:'Artist',
      picklistValues : '[{"value":"","label":"Select"},{"value":"bb","label":"Bad Bunny"},{"value":"jb","label":"J Balvin"},{"value":"dl","label":"Dua Lipa"}]',
      type: 'MULTIPICKLIST'},
    {fieldpath: '3', label:'Double',precision:12,scale:2,type:'DOUBLE',isCalculated:true},
    {fieldpath: '6', label:'Currency',precision:18,scale:9,type:'CURRENCY',isCalculated:true},
    {fieldpath: '7', label:'Percent',precision:18,scale:9,type:'PERCENT',isCalculated:true},
    {fieldpath: '0', label:'Actions',type:'ACTIONSMENU',
    actionValues : '[{"value":"add","label":"Add"},{"value":"delete","label":"Delete"}]'}
    ]},
  ];

  @track dataArray = 
  [
    {
      id: 1, 
      fields:[
        {fieldpath: '0',value: 1},
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
        {fieldpath: '0',value: 2},
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
        {fieldpath: '0',value: 3},
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
      ],
    },
    {
      id: 4, 
      fields:[
        {fieldpath: '0',value: 4},
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
      ],
      subitems : [
        {
          id: 5, 
          fields:[
            {fieldpath: '0',value: 5},
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
          id: 6, 
          fields:[
            {fieldpath: '0',value: 6},
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
        }
      ]
    },
    {
      id: 7, 
      fields:[
        {fieldpath: '0',value: 1},
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
      id: 8, 
      fields:[
        {fieldpath: '0',value: 1},
        {fieldpath: '1',value: ''},
        {fieldpath: '2',value: '2021-03-04'},
        {fieldpath: '3',value: 12.12},
        {fieldpath: '4',value: 'item 1 - value for column 4'},
        {fieldpath: '5',value: false},
        {fieldpath: '6',value: 1222.14542},
        {fieldpath: '7',value: 1},
        {fieldpath: '8',value: ''},
        {fieldpath: '9',value: 'item 1 - value for column 9'},
        {fieldpath: '10',value: 'bb'},
        {fieldpath: '11',value: 'item 1 - value for column 11'}
      ]
    }
    ,
    {
      id: 9, 
      fields:[
        {fieldpath: '0',value: 1},
        {fieldpath: '1',value: ''},
        {fieldpath: '2',value: '2021-03-04'},
        {fieldpath: '3',value: 12.12},
        {fieldpath: '4',value: 'item 1 - value for column 4'},
        {fieldpath: '5',value: false},
        {fieldpath: '6',value: 1222.14542},
        {fieldpath: '7',value: 1},
        {fieldpath: '8',value: ''},
        {fieldpath: '9',value: 'item 1 - value for column 9'},
        {fieldpath: '10',value: 'jb'},
        {fieldpath: '11',value: 'item 1 - value for column 11'}
      ]
    }
  ];

  @track sortedBy = {};

  get tabSetup(){
    return JSON.stringify(this.tabs)
  }

  get dataSetup(){
    return JSON.stringify(this.dataArray)
  }

  get data(){
    return this.dataArray;
  }

  get sorted(){
    return this.sortedBy;
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
  sortByFieldpath(array, key, reverse = false){
    array.sort((a, b) => {
      console.log('a');
      console.log(a.fields.find( f => f.fieldpath === key));
      console.log(b);
      let x = a.fields.find( f => f.fieldpath === key).value;
      let y = b.fields.find( f => f.fieldpath === key).value;
      x = isNaN(x) ? x.toLocaleUpperCase() : x;
      y = isNaN(y) ? y.toLocaleUpperCase() : y;
      if (reverse) {
        return x > y ? -1 : x < y ? 1 : 0;
      } else {
        return x < y ? -1 : x > y ? 1 : 0;
      }
    })
   }

  handleSortChanged(event){
    this.sortedBy = this.unproxy(event.detail.sortedBy);
    if(this.sortedBy){
      let dataArray = this.dataArray;
      let reverse = this.sortedBy.sorted == 'asc' || false
      this.sortByFieldpath(dataArray,this.sortedBy.fieldpath,reverse);
      this.dataArray = dataArray;
    }
  }

  handleCellChanged(event){
    let result = event.detail.result;
    let record = event.detail.record;
    record.fields.find( f => f.fieldpath === result.fieldpath).value = result.value;
    this.dataArray = this.unproxy(this.dataArray);
    let recordToUpdate = this.dataArray.find( item => item.id == record.id);
    if(recordToUpdate){
      recordToUpdate.fields = record.fields;
    }
    else{
      let recordRelated = this.dataArray.filter(item => item.subitems).find( item => item.subitems.find(subitem => subitem.id == record.id));
      if(recordRelated){
        let recordToUpdate = recordRelated.subitems.find( item => item.id == record.id);
        recordToUpdate.fields = record.fields;
      }
    }
    this.dataArray = [...this.dataArray];
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
