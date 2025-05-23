onBodyResize(() => {
    updateWebViewHeightWithBodyHeight()
    setTimeout(() => { focusCursorOnScreen() }, 100)
})

document.addEventListener("selectionchange", () => {
    reportSelectionStateChangedIfNecessary()
    setTimeout(() => { focusCursorOnScreen() }, 300)
})

document.addEventListener("click", () => {
    if (event.target.tagName === 'IMG') {
        const imgSrc = event.target.src;

        reportImageClicked(imgSrc)
    }
})

reportEmptyBodyStatus()
onEditorCharacterDataChange(() => {
    reportContentChange()
})
