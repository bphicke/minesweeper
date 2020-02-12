import { withRedux } from '../lib/withRedux';
import { Minesweeper } from '../components/Minesweeper';

const Index = () => <Minesweeper />;

Index.getInitialProps = () => {
  return {};
};

export default withRedux(Index);
