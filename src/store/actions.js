export default {
	handleKey({ commit, state }) {
		const { x, y } = state.position;
		const tempPos = { x, y };
	
		
		Object.keys(state.mapKey).forEach(key => {
			const keyIndex = Object.values(state.keyAlphabet).findIndex(i => i === key);
			if (typeof keyIndex !== 'number') {
				return;
			}
			const direction = Object.keys(state.keyAlphabet)[keyIndex];
			switch (direction) {
				case 'up':
					tempPos.y = y - state.step;
					break;
				case 'down':
					tempPos.y = y + state.step;
					break;
				case 'left':
					tempPos.x = x - state.step;
					break;
				case 'right':
					tempPos.x = x + state.step;
					break;
				default:
					break;
			}
			commit('CHANGE_POSITION', tempPos);
		});
		
	},
}