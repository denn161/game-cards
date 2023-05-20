export const createIconsArray = initialCount => {
	const cardsIcons = [
		'compass',
		'cloud',
		'play',
		'bolt',
		'stop',
		'cogs',
		'atom',
		'basketball-ball',
	]
	const sliced =
		initialCount === 10
			? -3
			: initialCount === 12
			? -2
			: initialCount === 14
			? -1
			: 8
	return cardsIcons.slice(0, sliced)
}

export const dublicateArray = arr =>
	arr.reduce((acc, item) => acc.concat(item, item), [])


	export const shuffleArray = (array)=>{
		 let currentIndex = array.length,randomIndex

		 while (currentIndex!==0) { 
			 randomIndex=Math.floor(Math.random()*currentIndex)
			 currentIndex-- 

			 [array[currentIndex],array[randomIndex]]=[array[randomIndex],array[currentIndex]]
			
		 }

		  return array
	}