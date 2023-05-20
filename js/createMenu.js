import { startGame } from './startGame.js'

export const createMenu = ()=>{
  const title = document.createElement('h2')
	const gameSectionContainer = document.querySelector('.game-section-container') 
	const confety = document.querySelector('.confetty')
	gameSectionContainer.innerHTML=''
	confety.innerHTML=''
	title.textContent='Выбор сложности'
	title.classList.add('game-section-title')
  gameSectionContainer.append(title)
	const creteDifficalteBtn = (diffical)=>{
		 const btn = document.createElement('button') 	
		 btn.classList.add('game-menu-diffical-btn') 
		 btn.textContent=diffical+'карт'
		 btn.addEventListener('click',()=>{
			 startGame(diffical)
		 })
		 gameSectionContainer.append(btn)
	}

	const difficals = [10,12,14,16]
	for(let i =0;i<difficals.length;i++){
    creteDifficalteBtn(difficals[i])
	}
  

}