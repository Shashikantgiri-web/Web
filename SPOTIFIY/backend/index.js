import express from 'express'
import Song from '../Spotifiy_song'
import Img from '../Spotifiy_images'
const app = express()
const port = 3000

app.get('/Spotifiy_song', (req, res) => {
  return res.send(Song)
})

app.get('/Spotifiy_images', (req, res) => {
  return res.send(Img)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})