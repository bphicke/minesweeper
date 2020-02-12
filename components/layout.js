import { StyleProvider } from 'cf-style-nextjs';
import { createComponent } from 'cf-style-container';

const Center = createComponent(({ theme }) => ({
  margin: '0px auto',
  margin: theme.space[4]
}));

const Header = createComponent(
  () => ({
    height: '10vh',
    lineHeight: '10vh'
  }),
  'h1'
);

const Body = createComponent(
  () => ({
    width: '100vw',
    height: '90vh',
    display: 'flex'
  }),
  'div'
);

export default ({ children, title = 'Minesweeper' }) => (
  <StyleProvider>
    <Center>
      <Header>{title}</Header>
      <Body>{children}</Body>
    </Center>
  </StyleProvider>
);
