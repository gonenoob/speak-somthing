const contentInfo = new SpeechSynthesisUtterance({
  lang: 'zh',
  rate: 1
})


function speakSomething(text, options = {}) {

  Object.assign(contentInfo, {
    text,
    ...options
  })

  window.speechSynthesis.speak(contentInfo)
}

module.exports = {
  speakSomething
}