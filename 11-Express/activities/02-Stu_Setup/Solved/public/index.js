document.getElementById('deleteBtn').addEventListener('click', () => {
    fetch('/delete/bananas?foo=bar&id=7', {
        method: 'DELETE'
    })
})