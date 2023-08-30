import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainNavigation from 'navigation/main/stack';

function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
