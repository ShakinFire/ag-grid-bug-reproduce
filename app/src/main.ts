import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { LicenseManager } from "ag-grid-enterprise";
import config from './config.json';

LicenseManager.setLicenseKey(config.agGridLicenseKey);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
