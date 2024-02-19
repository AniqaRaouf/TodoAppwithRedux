import React from 'react';
import { Provider  } from 'react-redux';
import Todoapp from './components/TodoApp';
import store from './components/Store';

const App = () => {
  return (
    <Provider store={store}>
      <Todoapp/>
    </Provider>
  );
};

export default App;
