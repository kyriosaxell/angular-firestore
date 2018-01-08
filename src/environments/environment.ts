import { firebase } from "@firebase/app";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAs0WBq1FzQ9QYE9awEnr7H4HP6kr7KlZQ",
    authDomain: "angular-fs-527fb.firebaseapp.com",
    databaseURL: "https://angular-fs-527fb.firebaseio.com",
    projectId: "angular-fs-527fb",
    storageBucket: "angular-fs-527fb.appspot.com",
    messagingSenderId: "769047966475"
  }
};
