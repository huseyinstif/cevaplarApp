import React,{ useState } from 'react';
import { StyleSheet, Text} from 'react-native';
import { Card } from "@rneui/themed";

import answerData from "../../data.json";
import ButtonComponent from '../Button/Button';

import Colors from '../../constants/Colors';
import Logo from '../../imgs/logoWhite.png';


const CardComponent = () => {
  
  const [answer,setAnswer] = useState("Şanslı Cevap");
    
  const getAnswer = () => {
    let randomize = Math.floor(Math.random() * answerData.length);
    let getAnswer = answerData[randomize]["answer"];
    setAnswer(getAnswer)
  }

    return(
      <Card
      containerStyle={styles.cardContainer}>

      <Card.Title
      style={styles.cardTitle}> Bir Soru Sor Ve Cevabını Al</Card.Title>

      
      <Card.Image
      style={styles.cardImage}
      source={Logo}
      >
      </Card.Image>

      <Text style={styles.cardText}>{answer}</Text>

      <ButtonComponent getAnswer={getAnswer}></ButtonComponent>

      </Card>
    );

}

const styles = StyleSheet.create({
  cardContainer: {
    height: 525,
    marginTop: 25,
    backgroundColor: Colors.secondary,
  },
  cardTitle: {
    fontSize: 21,
    color: Colors.textColor,
  },
  cardImage: {
    width: '75%',
    height: 250,
    marginLeft:25,
    borderRadius: 30,
  },
  cardText: {
    fontSize: 19,
    color: Colors.textColor,
    textAlign: 'center',
    marginTop: 45,
  },
});

export default CardComponent;