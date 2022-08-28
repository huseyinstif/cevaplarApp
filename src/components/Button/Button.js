import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { Button } from "@rneui/themed";

import Colors from '../../constants/Colors';


const ButtonComponent = ({getAnswer}) => {
    return(
        <Button
        icon={{
            name: 'refresh',
            type: 'font-awasome',
            size: 20,
            color: Colors.secondary,
        }}
        type="solid"
        size="md"
        buttonStyle={styles.buttonStyle}
        onPress={getAnswer}
        >

        </Button>
    );
}


const styles = StyleSheet.create({
    
    buttonStyle: {
    marginLeft: '29%',
    width: 140,
    height: 50,
    marginTop: 40,
    borderRadius:20,
    color: Colors.secondary,
    backgroundColor: Colors.textColor,
},

});


export default ButtonComponent;