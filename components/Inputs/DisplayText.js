import { createComponent } from 'cf-style-container';

export const DisplayText = createComponent(
  () => ({
    margin: '8px',
    marginLeft: '0px',
    color: '#494949',
    padding: '20px',
    border: '4px solid #494949',
    backgroundColor: '#FFFFFF',
    fontSize: '18px',
    fontWeight: 600,
    textAlign: 'center',
    width: '100%',
    maxWidth: '300px'
  }),
  'p'
);
