import {App} from './app';
import argv from './utils/argv';


(new App({
    isDebug: true,
    url: argv.url || 'http://localhost:8080',
})).run();
