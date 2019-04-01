const express = require('express')
const consola = require('consola')
const Mailchimp = require('mailchimp-api-v3')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1/'
const port = process.env.PORT || 3000
const cors = require('cors')

app.set('port', port)
app.use(express.json())

app.use(
  cors({
    origin: '*'
  })
)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

app.post('/subscribe', (req, res, next) => {
  const mailchimp = new Mailchimp('12d34de04bbdf1f6fc4b81bddd52dfbe-us19')
  mailchimp
    .post('/lists/0ddfc576ce/members', {
      email_address: req.body.hasOwnProperty('email') ? req.body.email : '',
      status: 'subscribed'
    })
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      res.json(err)
    })
})

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
