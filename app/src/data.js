import { Notes, Euro, Cloud } from '@material-ui/icons';

export const applications = [
  { name: 'Nextcloud',  domain: 'example.com',  url: 'https://example.com', icon: Cloud },
  { name: 'MyApp',      domain: 'example.com',  url: 'https://example.com', icon: Euro },
  { name: 'MyOtherApp', domain: 'example.com',  url: 'https://example.com', icon: Notes },
  { name: 'MyOtherApp', domain: 'example.com',  url: 'https://example.com', icon: Notes },
]

export const bookmarks = [
  { title: 'Cat 1', collection: [
    { name: 'asdf1', url: 'aaa'},
    { name: 'asdf2', url: 'bbb'},
  ]},
  { title: 'Cat 2', collection: [
    { name: 'asdf1', url: 'aaa'},
    { name: 'asdf3', url: 'bbb'},
  ]},
  { title: 'Cat 3', collection: [
    { name: 'asdf1', url: 'aaa'},
    { name: 'asdf2', url: 'bbb'},
    { name: 'asdf2', url: 'bbb'},
    { name: 'asdf2', url: 'bbb'},
    { name: 'asdf2', url: 'bbb'},
  ]},
  { title: 'Cat 3', collection: [
    { name: 'asdf1', url: 'aaa'},
    { name: 'asdf2', url: 'bbb'},
  ]},
  { title: 'Cat 3', collection: [
    { name: 'asdf1', url: 'aaa'},
    { name: 'asdf2', url: 'bbb'},
  ]},
]
