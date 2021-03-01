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

  @track data = [{item: 1, fields:[]}];

  handleItemClicked(event) {
    this.selectedTab = parseInt(event.target.getAttribute("data-index"));
  }
}
