import gulp from 'gulp'

import { serve } from './browsersync'
import { scripts } from './webpack';

export const build = gulp.series(scripts);
export const dev = gulp.series(scripts, serve);

export default dev
