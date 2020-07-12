const form = document.getElementById('form')
const demo = document.getElementById('demo')

form.addEventListener('submit', e => {
	e.preventDefault()
	demo.classList.remove('none')
	const textInput = document.getElementById('textInput')
	const node = document.createElement('li')
	// const textInputM = methodOne(textInput)
	const textInputM = methodTwo(textInput)
	const textNode = document.createTextNode(textInputM)
	node.appendChild(textNode)
	demo.appendChild(node)
	textInput.value = ''
})

function methodOne (textNode) {
	textInput = textNode.value.replace(/ /g, "-")
	return textInput
}

function methodTwo (textNode) {
	let textInput = textNode.value.split(' ')
	textInput = textInput.join('-')
	return textInput
}