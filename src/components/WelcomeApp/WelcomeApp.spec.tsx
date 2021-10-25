import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import WelcomeApp from '.';
import theme from '../../styles/themes/theme';

describe('<WelcomeApp />', () => {
  it('should render the heading', () => {
    render(
      <ThemeProvider theme={theme}>
        <WelcomeApp
          welcomeMessage="Bem-vindo a sua bolsa digital de commodities"
          buttonPrimaryText="Entrar"
          buttonSecondaryText="Criar conta"
        />
      </ThemeProvider>,
    );

    expect(
      screen.getByRole('heading', {
        name: /Bem-vindo a sua bolsa digital de commodities/i,
      }),
    ).toBeInTheDocument();
  });

  it('should render the button primary', () => {
    render(
      <ThemeProvider theme={theme}>
        <WelcomeApp
          welcomeMessage="Bem-vindo a sua bolsa digital de commodities"
          buttonPrimaryText="Entrar"
          buttonSecondaryText="Criar conta"
        />
      </ThemeProvider>,
    );

    const button = screen.getByRole('button', { name: /Entrar/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      background: '#ff6900',
      border: '1px solid #ff6900',
      color: '#fff',
    });
  });

  it('should render the button secondary', () => {
    render(
      <ThemeProvider theme={theme}>
        <WelcomeApp
          welcomeMessage="Bem-vindo a sua bolsa digital de commodities"
          buttonPrimaryText="Entrar"
          buttonSecondaryText="Criar conta"
        />
      </ThemeProvider>,
    );

    const button = screen.getByRole('button', { name: /Criar conta/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      background: 'transparent',
      border: '1px solid #fff',
      color: '#fff',
    });
  });
});
