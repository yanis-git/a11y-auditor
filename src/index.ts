import {App} from './app';
import argv from './utils/argv';


(new App({
    url: argv.url || 'http://localhost:8080',
})).run();
