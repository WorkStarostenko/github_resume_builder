import {StackScreenProps} from '@react-navigation/stack';

import {MainStackParamsList} from 'navigation/main/types';

export type ScreenProps = StackScreenProps<
  MainStackParamsList,
  'Home',
  'MainStack'
>;
