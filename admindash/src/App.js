import React from 'react';
import {Admin, Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import ContentList from './components/ContentList'
import CreateContent from './components/CreateContent'
import EditContent from './components/EditContent'
import MovieIcon from '@material-ui/icons/Movie';
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Admin title='Youtube Studio' 
    dashboard={Dashboard} 
    dataProvider={restProvider('http://localhost:3000')}>
      <Resource icon={MovieIcon} name='Contents' list={ContentList} create={CreateContent} edit={EditContent} />
    </Admin>
  );
}

export default App;
