import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

export default createStackNavigator({
  Main,
  Product
}, {
  navigationOptions: {
    headerStyle: { //Estiliza o Header
      backgroundColor: '#DA552F',
    },
    headerTintColor: '#fff' // Cor do texto do Header
  }
});