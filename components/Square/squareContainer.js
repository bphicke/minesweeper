import { createComponent } from 'cf-style-container';

const SquareContainer = createComponent(
  ({ disabled }) => ({
    width: 40,
    height: 40,
    padding: 10,
    cursor: disabled ? 'initial' : 'pointer',
    backgroundColor: disabled ? '#CCC' : '#FFF',
    border: `1px solid black`,
    lineHeight: 1,
    textAlign: 'center',
    fontSize: 18,
    '&:hover': {
      backgroundColor: '#CCC'
    }
  }),
  'div',
  ['onClick', 'onContextMenu']
);

export default SquareContainer;
