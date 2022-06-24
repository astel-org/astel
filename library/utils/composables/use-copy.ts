export type useCopyResult = {
  copyText: (text: string) => void
}

const createElement = () => {
  const _el = document.createElement('div')
  _el.style.whiteSpace = 'pre'
  return _el
}

const useCopy = (): useCopyResult => {
  const _el = createElement()
  const copyText = (text: string) => {
    if (!text) return
    const selection = window.getSelection()
    if (!selection) return
    const range = document.createRange()
    _el.textContent = text
    document.body.append(_el)
    range.selectNode(_el)
    selection.removeAllRanges()
    selection.addRange(range)
    try {
      document.execCommand('Copy')
    } catch {
      console.error('Copy failed!')
    }
    selection.removeAllRanges()
    _el.textContent = ''
    _el.remove()
  }
  return { copyText }
}

export { useCopy }
