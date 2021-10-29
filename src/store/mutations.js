export default {
	CHANGE_POSITION(state, { x, y }) {
		state.position.x = x;
		state.position.y = y;
	},
	CHANGE_MAP_KEY(state, { action, key }) {
		if (action === 'add') {
			state.mapKey[key] = true;
			return;
		}
		delete state.mapKey[key];
	}
}