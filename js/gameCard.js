export const gameCard = (defaultIcon, currentIcon) => {
	const card = document.createElement('div')
	card.classList.add('game-card')
	const defaultCardI = document.createElement('i')
	const currentCardI = document.createElement('i')
	defaultCardI.classList.add('fa', `fa-${defaultIcon}`)
	currentCardI.classList.add('fa', `fa-${currentIcon}`)
	card.append(defaultCardI, currentCardI)

	return card
}
