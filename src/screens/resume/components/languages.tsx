import * as React from 'react';
import {Box, Flex, Stack, Text} from '@react-native-material/core';
import {ILanguage} from 'interfaces/Language';

type Props = {languages: ILanguage[]};

const LanguagesComponent = (props: Props) => {
  return (
    <Stack mb={16}>
      <Text variant="h6">Popular Languages</Text>
      <Flex mt={8} wrap="wrap" direction="row">
        {props.languages.map(language => (
          <Box w="50%" key={language.name}>
            <Text variant="body2">
              - {language.name}{' '}
              <Text variant="body2" color="secondary">
                ({language.percent}%)
              </Text>
            </Text>
          </Box>
        ))}
      </Flex>
    </Stack>
  );
};

export default LanguagesComponent;
