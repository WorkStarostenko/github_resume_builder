import * as React from 'react';
import {Stack, Text} from '@react-native-material/core';

const LoadingComponent = () => {
  return (
    <Stack fill={1} center>
      <Text variant="h6">Loading...</Text>
    </Stack>
  );
};

export default LoadingComponent;
