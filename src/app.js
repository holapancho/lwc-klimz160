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

  @track data = 
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

  handleItemClicked(event) {
    this.selectedTab = parseInt(event.target.getAttribute("data-index"));
  }
}
