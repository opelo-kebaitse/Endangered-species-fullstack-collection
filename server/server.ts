import * as Path from 'node:path'

import express from 'express'
import speciesRoute from './routes/speciesRoute'

const server = express()
server.use(express.json())

// Mount the species route at /api endpoint

server.use('/api/v1/species', speciesRoute)


if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
