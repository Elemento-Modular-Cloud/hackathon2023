const express = require('express')
const multer = require('multer')
const path = require('path')
const apisauce = require('apisauce')

const port = 3030
const app = express()
app.use(express.text())
app.use(express.json())

// Multer configuration
const storage = multer.memoryStorage() // You can choose a storage strategy that suits your needs
const upload = multer({ storage })

app.post('/audio', upload.single('audio'), async (req, res) => {
  const audioFile = req.file

  const uri = req.query.uri
  const fileName = uri.split('/').pop()

  require('fs').writeFileSync(path.join(__dirname, 'audio', fileName), audioFile.buffer)

  const speech = require('@google-cloud/speech')
  const client = new speech.SpeechClient({
    projectId: 'angular-geode-408314'
  })

  async function quickstart () {
    const inputFilePath = path.join(__dirname, 'audio', fileName)

    // Read the converted audio file
    const audioContent = require('fs').readFileSync(inputFilePath).toString('base64')

    // Detects speech in the audio file
    try {
      const [response] = await client.recognize({
        audio: {
          content: audioContent
        },
        config: {
          encoding: 'MP3',
          sampleRateHertz: 16000,
          languageCode: 'it-IT'
        }
      })
      const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n')
      console.log(transcription)

      const recon = apisauce.create({ baseURL: 'http://192.168.0.26:5000' })
      const ret = await recon.post('/text', {
        text: transcription
      })

      if (ret.ok) {
        const payload = ret.data
        console.log(payload)

        let Api = apisauce.create({ baseURL: 'http://127.0.0.1:17777/api/v1.0/client/vm' })

        const res = await Api.post('/canallocate', payload)

        if (res.ok) {
          Api = apisauce.create({ baseURL: 'http://127.0.0.1:17777/api/v1.0/client/vm' })
          const ret = await Api.post('/register', payload)

          console.log(ret)
        } else {
          console.log(res)
        }
      } else {
        console.log('recognition error', ret)
      }
    } catch (err) {
      console.error('Error:', err)
    }
  }

  await quickstart()

  return res.status(200).json({})
})

app.listen(port, () => {
  console.log(`⚡️[ElementoCloud]: API Service is running at ::${port}`)
})
