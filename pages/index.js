import { withRedux } from '../lib/withRedux';
import { MinesweeperWithRedux } from '../components/MinesweeperWithRedux';

const Index = () => <MinesweeperWithRedux />;

Index.getInitialProps = ({ reduxStore }) => {
  //setMines(reduxStore.dispatch);
  console.log('reduxStore', reduxStore);
  return {};
};

export default withRedux(Index);
