/* ──────────────────────────────────────────────────────────
►►► Post CSS Config
────────────────────────────────────────────────────────── */
// import purgecss from '@fullhuman/postcss-purgecss'
import autoprefixer from 'autoprefixer'
import inlinesvg from 'postcss-inline-svg'

/* ─────────────────────────────────────────────────────── */
// const config = require('./utils/config')
/* ─────────────────────────────────────────────────────── */

let postcss = {
  plugins: [
    inlinesvg(),
    autoprefixer(),
    // purgecss({
    //   content: ['./src/pages/*.astro', './src/component/*.astro']
    // })
    // [
    //   'postcss-critical-css', 
    //   {
    //     outputPath: config.css.critical.outputPath,
    //     outputDest: config.css.critical.outputDest,
    //     minify: true
    //   }
    // ]
  ],
}

// if (config.env.isProd) {
//   postcss.plugins.push(autoprefixer())

//   postcss.plugins.push(
//     purgecss({
//       content: config.css.views
//     })
//   )
// }

export default postcss
