import { HttpHeaders } from '@angular/common/http';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  USER_LOGGED: false,
  USER_ID: undefined,
  // USER_AUTH_TOKEN: undefined,

  SERVER_URL: 'https://api.sjairlines.tk/',
  LOCAL_URL: 'http://localhost:3004/',

  HTTP_OPTIONS : {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': 'text/string',
      'Access-Control-Allow-Header': 'text/string',
      'Content-Type': 'application/json',
      'Authorization': 'text/string'
    }),
    observe: 'response' as 'response'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
