import { useEffect } from 'react';
import type { GlobalProvider } from '@ladle/react';
import { Toaster } from '../src/ui/atoms/Toaster';
import '../src/global.css';

export const Provider: GlobalProvider = ({ children, globalState }) => {
  useEffect(() => {
    document.documentElement.classList.toggle('dark', globalState.theme === 'dark');
  }, [globalState.theme]);

  return (
    <>
      {children}
      <Toaster theme={globalState.theme} />
    </>
  );
};
