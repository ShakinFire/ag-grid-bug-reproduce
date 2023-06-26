import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { LicenseManager } from "ag-grid-enterprise";
import {environments} from "./environments";

LicenseManager.setLicenseKey(environments.agGridLicenseKey);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
