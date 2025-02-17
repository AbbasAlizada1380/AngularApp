import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [], // Remove hydration provider if using SSR
}).catch((err) => console.error(err));
