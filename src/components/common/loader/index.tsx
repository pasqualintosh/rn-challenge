import { ActivityIndicator } from 'react-native';

import { Wrapper } from './styled';

function Loader() {
  return (
    <Wrapper>
      <ActivityIndicator size="large" />
    </Wrapper>
  );
}

export default Loader;
