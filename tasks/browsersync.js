import path from 'path'
import gulp from 'gulp'
import Browser from 'browser-sync'
import { scripts } from './webpack';

const browser = Browser.create();

export const serve = () => {
  browser.init({
    server: {
      baseDir: path.join(__dirname, '../dist'),
    },
    open: false,
  });

  gulp.watch('src').on('change', () => scripts().then(() => browser.reload()));
};
