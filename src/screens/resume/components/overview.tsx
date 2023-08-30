import * as React from 'react';
import {Avatar, Stack, Text} from '@react-native-material/core';

type Props = {
  avatarUrl: string;
  publicRepos: number;
  followers: number;
  location: string;
  name: string;
  createdAt: string;
};

const OverviewComponent = (props: Props) => {
  const year = new Date(props.createdAt).getFullYear();
  const location = props.location ? `based in ${props.location}` : '';

  return (
    <Stack mb={16} mt={16} center spacing={24} justify="center">
      <Avatar size={200} image={{uri: props.avatarUrl}} />
      <Stack center spacing={8}>
        <Text variant="h4">{props.name}</Text>
        <Text variant="subtitle2">
          On GitHub since {year}, {props.name} is a developer {location} with{' '}
          <Text color="secondary" variant="subtitle2">
            {props.publicRepos} public repositories
          </Text>{' '}
          and{' '}
          <Text color="secondary" variant="subtitle2">
            {props.followers} followers
          </Text>
          .
        </Text>
      </Stack>
    </Stack>
  );
};

export default OverviewComponent;
