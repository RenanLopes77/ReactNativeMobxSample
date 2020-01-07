import {create} from 'mobx-persist';
import {Provider} from 'mobx-react';
import React from 'react';
import {AsyncStorage} from 'react-native';
import Home from './src/components/Home';
import CountStore from './src/store/CountStore';
import UserStore from './src/store/UserStore';

const App = () => {
  const hydrate = create({storage: AsyncStorage});
  hydrate('name', UserStore);
  hydrate('count', CountStore);

  const stores = {UserStore, CountStore};
  return (
    <Provider {...stores}>
      <Home />
    </Provider>
  );
};

export default App;
