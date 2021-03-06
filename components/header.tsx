import { FaSun, FaMoon } from 'react-icons/fa';
import { Container } from './common/container';
import { useAppContext } from './common/appContext';

export const Header = () => {
  const appContext = useAppContext();
  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    appContext.setThemeName(appContext.themeName === 'light' ? 'dark' : 'light');
  };

  return (
    <Container>
      <header className="flex-row flex justify-between mt-8 mb-8 md:mb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold md:pr-8">Alessandro Romano</h1>
          <p className="text-xl md:text-2xl italic md:pr-8">The Empathic Tech Lead</p>
        </div>
        <button
          className="self-center rounded-full border-background-500 dark:border-foreground-500 border-solid border-2 p-1"
          onClick={toggleTheme}
          aria-label={appContext.themeName === 'light' ? 'Set Dark Theme' : 'Set Light Theme'}
        >
          {appContext.themeName === 'light' && <FaSun className="h-10 w-10" />}
          {appContext.themeName === 'dark' && <FaMoon className="h-10 w-10" />}
        </button>
      </header>
    </Container>
  );
};
