import * as React from 'react';
import {Text} from '@react-native-material/core';
import {Linking, StyleSheet} from 'react-native';

type LinkProps = {title: string; url: string};

const LinkComponent = ({title, url}: LinkProps) => {
  const openLink = () => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      }
    });
  };

  return (
    <Text
      onPress={openLink}
      color="secondary"
      style={styles.title}
      variant="body2">
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
  },
});

export default LinkComponent;
