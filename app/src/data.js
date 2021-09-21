import { Notes, Euro, Cloud, AccessAlarm } from '@material-ui/icons';

export const applications = [
  { name: 'MyApp',  domain: 'myapp.example.com',  url: 'https://myapp.example.com', icon: Cloud },
  { name: 'MyOtherApp',      domain: 'myotherapp.example.com',  url: 'https://myotherapp.example.com', icon: Euro },
  { name: 'YetAnotherApp', domain: 'yetanother.example.com',  url: 'https://yetanother.example.com', icon: Notes },
  { name: 'AaandAnotherOne', domain: 'andanother.example.com',  url: 'https://andanother.example.com', icon: AccessAlarm },
]

export const bookmarks = [
  { title: 'Category 1', collection: [
    { name: 'Site1', url: 'https://example.com'},
    { name: 'Site2', url: 'https://example.com'},
  ]},
  { title: 'Category 2', collection: [
    { name: 'Site3', url: 'https://example.com'},
    { name: 'Site4', url: 'https://example.com'},
    { name: 'Site5', url: 'https://example.com'},
  ]},
  { title: 'Category 3', collection: [
    { name: 'Site6', url: 'https://example.com'},
    { name: 'Site7', url: 'https://example.com'},
    { name: 'Site8', url: 'https://example.com'},
    { name: 'Site9', url: 'https://example.com'},
    { name: 'Site10', url: 'https://example.com'},
  ]},
  { title: 'Category 4', collection: [
    { name: 'Site11', url: 'https://example.com'},
    { name: 'Site12', url: 'https://example.com'},
  ]},
  { title: 'Category 5', collection: [
    { name: 'Site13', url: 'https://example.com'},
    { name: 'Site14', url: 'https://example.com'},
  ]},
]
