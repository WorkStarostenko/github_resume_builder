import * as React from 'react';
import {Flex, Stack, Text} from '@react-native-material/core';

import {IRepository} from 'interfaces/Repository';
import LinkComponent from './link';

type Props = {repositories: IRepository[]};

const RepositoriesComponent = (props: Props) => {
  return (
    <Stack>
      <Text variant="h6">Popular Repositories</Text>
      <Stack mt={8} spacing={8}>
        {props.repositories.map(repos => (
          <Flex key={repos.id.toString()}>
            <Flex justify="between" direction="row">
              <LinkComponent url={repos.html_url} title={repos.name} />
              <Text variant="body2">
                {new Date(repos.created_at).getFullYear()} -{' '}
                {new Date(repos.updated_at).getFullYear()}
              </Text>
            </Flex>
            <Text variant="caption">
              This repository has {repos.stargazers_count} stars and{' '}
              {repos.forks} forks.
            </Text>
          </Flex>
        ))}
      </Stack>
    </Stack>
  );
};

export default RepositoriesComponent;
