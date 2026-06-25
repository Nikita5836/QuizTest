import { getData } from './api.js'

const list = document.querySelector('.list')

const render = async () => {
	const tests = await getData()

	tests.forEach(test => {
		const questionItem = document.createElement('li')

		const text = document.createElement('span')
		questionItem.appendChild(text)

		for (let i = 1; i <= 5; i++) {
			const optionBtn = document.createElement('button')
			optionBtn.textContent = test['option' + i]

			optionBtn.addEventListener('click', () => {
				if (i === test.correct) {
					alert('Верно')
				} else {
					alert('Неверно')
				}
			})
			questionItem.appendChild(optionBtn)
		}

		text.textContent = test.question

		list.appendChild(questionItem)
	})
}

render()
