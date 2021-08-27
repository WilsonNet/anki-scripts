const fs = require('fs')
const clipboardy = require('clipboardy')

// Watch for changes in the sounds directory and copy the file name to the clipboard
fs.watch(
  process.env.APPDATA + '\\Anki2\\Wilso\\collection.media',
  (eventType, filename) => {
    console.log(eventType)
    console.log(filename)
    clipboardy.writeSync(`[sound:${filename}]`)
  },
)
