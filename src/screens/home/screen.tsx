import * as React from 'react';
import {Button} from '@react-native-material/core';
import {Stack, TextInput, Text} from '@react-native-material/core';

import styles from './styles';
import {ScreenProps} from './types';

const HomeScreen = ({navigation}: ScreenProps) => {
  const [value, setValue] = React.useState('');
  const onSubmit = () => {
    navigation.navigate('Resume', {nickname: value});
  };

  return (
    <Stack spacing={24} justify="center" style={styles.container}>
      <Text variant="h4">
        Create your resume by{' '}
        <Text color="white" style={styles.title} variant="h4">
          GitHub
        </Text>{' '}
        nickname
      </Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        label="Your nickname"
        variant="outlined"
      />
      <Button
        disabled={!value.length}
        color="secondary"
        title="Create Resume"
        onPress={onSubmit}
      />
    </Stack>
  );
};

export default HomeScreen;
