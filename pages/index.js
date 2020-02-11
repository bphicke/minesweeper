import { withRedux } from '../lib/withRedux';
import { MinesweeperWithRedux } from '../components/MinesweeperWithRedux';

const Index = () => <MinesweeperWithRedux />;

Index.getInitialProps = () => {
  return {};
};

export default withRedux(Index);
