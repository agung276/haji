import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import Information from './Information';
import WebScreen from './PageView';
import Intro from './Intro';
import Slider from './Header';
import Footer from './Footer';
import Body from './Body';
import Alert from './Alert';
import Test from './Test';

const NavApp = createStackNavigator({
  Home:{screen:HomeScreen},
  Intro:{screen:Intro},
  Profile:{screen:ProfileScreen},
  Information:{screen:Information},
  Webpage:{screen:WebScreen},
  Slider:{screen:Slider},
  Footer:{screen:Footer},
  Body:{screen:Body},
  Alert:{screen:Alert},
  Test:{screen:Test}
  });

const App = createAppContainer(NavApp);
export default App;