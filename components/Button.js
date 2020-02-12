import { createComponent } from 'cf-style-container';

export const Button = createComponent(
  () => ({
    margin: '8px',
    marginLeft: '0px',
    color: '#494949',
    padding: '20px',
    border: '4px solid #494949',
    backgroundColor: '#FFFFFF',
    transition: 'all 0.4s ease 0s',
    fontSize: '18px',
    fontWeight: 600,
    '&:hover': {
      color: '#FFFFFF',
      background: '#F6B93B',
      transition: 'all 0.4s ease 0s'
    }
  }),
  'button',
  ['onClick']
);
