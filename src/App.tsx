// in src/App.js
import React from 'react';

import jsonServerProvider from 'ra-data-json-server';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';

import { Layout } from './layout';
import englishMessages from './i18n/en';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const { Admin, Resource } = require('react-admin');
const { UserList } = require('./users');
const { PostList, PostEdit, PostCreate } = require('./posts');

const  dataProvider  = jsonServerProvider('https://jsonplaceholder.typicode.com');

const i18nProvider = polyglotI18nProvider(locale => {
  if (locale === 'fr') {
      return import('./i18n/fr').then(messages => messages.default);
  }

  // Always fallback on english
  return englishMessages;
}, 'en');


const App = () => (
  <Admin dashboard={Dashboard} title="AstroImages" dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
      <Resource name="users" list={UserList} icon={UserIcon}/>
  </Admin>

  // <Admin
  // title=""
  // dataProvider={dataProvider}
  // dashboard={Dashboard}
  // layout={Layout}
  // i18nProvider={i18nProvider}
  // >
  // <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
  // <Resource name="users" list={UserList} icon={UserIcon}/>
  // </Admin>

);

export default App;
