import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { JobPage } from './components/jobPage/job-list/jobListPage';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { HeaderComponent } from './components/header'
import Home from './components/home';

const client = new ApolloClient({
  uri: 'https://api.graphql.jobs/',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <HeaderComponent/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/job" element={<JobPage/>}/>
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
