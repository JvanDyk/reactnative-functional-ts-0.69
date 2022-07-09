// React
import React, { useEffect, useState } from 'react';

// Native components
import {
  Linking,
  StyleSheet,
  Text,
  View
} from 'react-native';

// Icons
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faFire} from '@fortawesome/free-solid-svg-icons';

import { Button, theme } from 'galio-framework';

const Welcome: React.FC = (): JSX.Element => {

   // State
   const [visible, setVisible] = useState<boolean>(false);

   // Effects
   useEffect(() => {
    //Runs on every render
  });

  useEffect(() => {
    //Runs only on the first render
  }, []);

  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
  //}, [prop, state]);
  }, [visible]);

  //function toggleTitle(){  
  //}
  const toggleTitle = () => {
    if(visible){
      setVisible(false);
    }else{
      setVisible(true);
    }
  }

  return (
    <React.Fragment>
       <View style={{flex: 1}}>
        {
          visible && 
          <Text style={[styles.title, {textAlign: 'center', padding:16}]}>Hello World!</Text>
        }
        <View style={styles.section}>
          <Text style={{fontSize:24, textAlign:'center', color: 'black', fontWeight:'bold'}}>Welcome to React Native 0.69</Text>
          <View style={{margin:64}}>
          <FontAwesomeIcon icon={faFire} size={ 84 }  />
          </View>
        </View>
        <View style={styles.section}>
          <Button color='lightgreen' onPress={() => toggleTitle()}>
              <Text style={{color:'black'}}>Set Visible</Text>
            </Button>
          <Button color='cyan' onPress={() => { Linking.openURL('https://reactnative.dev/docs/intro-react')}}>
            <Text style={{color:'black'}}>React Native</Text>
          </Button>
        </View>
       </View>
      

    </React.Fragment>
  );
};

const styles = StyleSheet.create({
 title: {
  fontSize: 20
 },
 section: {
  flex: 1, 
  flexDirection:'column', 
  justifyContent: 'center', 
  alignItems:'center',
  //borderWidth: 1
}
});

export default Welcome;