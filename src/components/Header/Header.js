import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import { Header,Icon } from "@rneui/themed";

import Colors from "../../constants/Colors";

const HeaderComponent = () => {
 const docsNavigate = () => {
    Alert.alert(
      "Hakkında",
      "\nCoded by: Huseyin T.",[{text:"Tamam",}]
      );
  }

    return(
        <Header
        containerStyle={styles.headerContainer}
    
        leftComponent={{
          icon: "menu",
          color: Colors.textColor,
          marginTop: 30,
          marginLeft: 15,
          size: 32,
        }}
    
        centerComponent={
          <Image
          style={styles.headerLogo}
          source={require('../../imgs/logoWhite.png')}
        />
        }
    
        rightComponent={
          <View>
            <TouchableOpacity onPress={docsNavigate}>
            <Icon type="Feather" name="info" color={Colors.textColor} style={styles.rightComponent}></Icon>
            </TouchableOpacity>
          </View>
        }
    
        />        
    );

}

const styles = StyleSheet.create({

    headerContainer: {
      marginTop: 23,
      backgroundColor: Colors.secondary,
      height: 100,
    },
    centerComponent: {
      fontSize: 22,
      color: Colors.textColor,
      marginTop: 35,
    },
    rightComponent: {
      marginTop: 35,
      marginRight: 5,
    },
    headerLogo: {
      marginTop: 15,
      width: 50,
      height: 50,
    },
  });

export default HeaderComponent;