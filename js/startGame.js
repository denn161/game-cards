import { confetti } from './confetty.js'
import { createMenu } from './createMenu.js'
import { gameCard } from './gameCard.js'
import { createIconsArray, dublicateArray, shuffleArray } from './utils.js'

export const startGame = diff => {
	let firstCard = null
	let secondCart = null
	let clickable = true

	const gameSectionContainer = document.querySelector('.game-section-container')
	const $confetty = document.querySelector('.confetty')
	const gameTable = document.createElement('div')
	const restartBtn = document.createElement('button')
	const iconsrArr = createIconsArray(diff)
	const dublicateArr = dublicateArray(iconsrArr)
	gameSectionContainer.innerHTML = ''
	restartBtn.textContent = 'Рестарт'
	gameTable.classList.add('game-table')
	restartBtn.classList.add('restart-btn')
	shuffleArray(dublicateArr)

	dublicateArr.forEach(icon =>
		gameTable.append(gameCard('question-circle', icon))
	)
	gameSectionContainer.append(gameTable, restartBtn)

	const cards = document.querySelectorAll('.game-card')
	restartBtn.addEventListener('click', createMenu)

	cards.forEach((card, index) => {
		card.addEventListener('click', e => {
			if (clickable && !card.classList.contains('sucessfully')) {
				card.classList.add('rotate')
				if (firstCard === null) {
					firstCard = index
				} else {
					if (index !== firstCard) {
						secondCart = index
						clickable = false
					}
				}
				if (
					firstCard !== null &&
					secondCart !== null &&
					firstCard !== secondCart
				) {
					if (
						cards[firstCard].lastElementChild.className ===
						cards[secondCart].lastElementChild.className
					) {
						setTimeout(() => {
							cards[firstCard].classList.add('successfully')
							cards[secondCart].classList.add('successfully')
							firstCard = null
							secondCart = null
							clickable = true
						}, 500)
					} else {
						setTimeout(() => {
							cards[firstCard].classList.remove('rotate')
							cards[secondCart].classList.remove('rotate')
							firstCard = null
							secondCart = null
							clickable = true
						}, 500)
					}
				}

				const isFlipp = Array.from(cards).every(card =>
					card.className.includes('rotate')
				)

				if (isFlipp) {
					clickable = false
					$confetty.innerHTML = confetti
				}
			}
		})
	})
}
