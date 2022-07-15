const songsEl = document.getElementById('songs')
const songsArray = Array.from(songsEl)

console.log(typeof songsEl.children)
console.log(songsEl.children)

for (const element of songsEl.children) {
    element.setAttribute('red')
    console.log(element)
}