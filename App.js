import { View} from 'react-native';

import HeaderComponent from './src/components/Header/Header';
import CardComponent from './src/components/Card/Card';

import Colors from './src/constants/Colors';

const App = () => {

  return (
    <>
      <View style={{flex:1, backgroundColor:Colors.secondary}}>

      <HeaderComponent/>
      <CardComponent/>
      </View>

    </>
  );
}


export default App;