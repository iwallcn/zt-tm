import * as React from 'react';
import { runApp, IAppConfig } from 'ice';
import LocaleProvider from '@/components/LocaleProvider';
import { getLocale } from '@/locales/locale';

const locale = getLocale();

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
    addProvider: ({ children }) => <LocaleProvider locale={locale}>{children}</LocaleProvider>,
  },
  router: {
    type: 'browser',
  },
};
runApp(appConfig);
