import { createComponent } from 'cf-style-container';

const Desk = createComponent(({ boardSize }) => ({
  width: 40 * boardSize + 2,
  height: 40 * boardSize + 2,
  border: `1px solid black`,
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '32px',
  marginTop: '8px'
}));

export default Desk;
