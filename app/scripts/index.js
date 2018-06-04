import './../styles/common.scss'
import './../styles/header.scss'
import './../styles/footer.scss'

// import js
import 'bootstrap'
import 'babel-polyfill'

if (process.env.NODE_ENV !== 'production') {
  require('./../index.pug')
}
