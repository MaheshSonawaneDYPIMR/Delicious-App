import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from "@expo/vector-icons";


const StartRating = (props) => {

  const stars = [0,1,2,3,4]
  let num = 0;

    
  return (
    <View>
      {/* <Text>StartRating</Text>
      <FontAwesome name="star-o" size={24} color="black" />
      <FontAwesome name="star" size={24} color="black" />
      <FontAwesome name="star-half-full" size={24} color="black" /> */}
      <View style={{flexDirection:'row'}}>
        {stars.map((item, index) => {
          const num = item + 0.5;

          return (
            <View key={index}>
              {props.rating >= item + 1 ? (
                <FontAwesome name="star" size={props.size} color={props.color} />
              ) : props.rating >= num ? (
                <FontAwesome
                  name="star-half-full"
                  size={props.size}
                  color={props.color}
                />
              ) : (
                <FontAwesome name="star-o" size={props.size} color={props.color} />
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default StartRating

const styles = StyleSheet.create({})