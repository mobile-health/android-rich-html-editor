onBodyResize(() => {
    updateWebViewHeightWithBodyHeight()
    setTimeout(() => { focusCursorOnScreen() }, 100)
})

document.addEventListener("selectionchange", () => {
    reportSelectionStateChangedIfNecessary()
    setTimeout(() => { focusCursorOnScreen() }, 300)
})

reportEmptyBodyStatus()
onEditorCharacterDataChange(() => {
    reportContentChange()
})
