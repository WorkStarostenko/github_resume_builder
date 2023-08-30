import * as React from 'react';
import {VStack, Divider} from '@react-native-material/core';
import {ScrollView} from 'react-native';

import {ScreenProps} from './types';
import {useMakeResume} from './hooks/makeResume';
import LoadingComponent from './components/loading';
import ErrorViewComponent from './components/error_view';
import OverviewComponent from './components/overview';
import LanguagesComponent from './components/languages';
import RepositoriesComponent from './components/repositories';

const ResumeScreen = (props: ScreenProps) => {
  const {loading, error, data} = useMakeResume(props.route.params.nickname);

  if (loading) {
    return <LoadingComponent />;
  }

  if (error || !data) {
    return <ErrorViewComponent nickname={props.route.params.nickname} />;
  }

  return (
    <ScrollView>
      <VStack divider={<Divider />} spacing={16} p={16}>
        <OverviewComponent
          publicRepos={data.overview.public_repos}
          createdAt={data.overview.created_at}
          name={data.overview.name!}
          followers={data.overview.followers}
          avatarUrl={data.overview.avatar_url}
          location={data.overview.location}
        />
        <LanguagesComponent languages={data.formattedLanguages} />
        <RepositoriesComponent repositories={data.publicRepositories} />
      </VStack>
    </ScrollView>
  );
};

export default ResumeScreen;
