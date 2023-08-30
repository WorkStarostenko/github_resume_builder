import * as React from 'react';
import {Button, Stack, Text} from '@react-native-material/core';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

type ErrorProps = {
  nickname: string;
};

const ErrorViewComponent = ({nickname}: ErrorProps) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Stack self="center" spacing={24} justify="center" style={styles.container}>
      <Text style={styles.title} variant="h2">
        Not 🙁 Found
      </Text>
      <Text>
        Sorry, but we didn't find your{' '}
        <Text color="white" style={styles.subtitle}>
          {nickname}
        </Text>{' '}
        nickname
      </Text>
      <Button color="secondary" title="Go Home" onPress={goBack} />
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flex: 1,
  },
  title: {
    fontWeight: '600',
  },
  subtitle: {
    backgroundColor: 'black',
    fontWeight: '600',
  },
});

export default ErrorViewComponent;
