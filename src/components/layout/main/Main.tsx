// React
import React from 'react';

// Interfaces
import {IMain} from './IMain';

// Native components
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';

// Navigation
import * as navigationRef from '../../../routes/RootNavigation';

const Main: React.FC<IMain> = (props: IMain): JSX.Element => {
  return (
    <React.Fragment>
      <ScrollView>
        <View style={styles.screen}>
          {/* CONTENT */}
          {props.children}
        </View>
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  screen:{
    minHeight: Dimensions.get('window').height,
    minWidth: Dimensions.get('window').width
  }
});
export default Main;
