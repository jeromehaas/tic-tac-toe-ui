// LOCALSTORAGE PLUGIN
const localStoragePlugin = store => {
	
	// GET STORED STATE
	const storedState = localStorage.getItem('gameStore');
	
	// IF STORED STATE IS AVAILABLE PARSE AND REPLACE STATE DATA
	if (storedState) store.replaceState(Object.assign(store.state, JSON.parse(storedState)));
	
	// SUBSCRIBE TO MUTATIONS
	store.subscribe((mutation, state) => {
		localStorage.setItem('gameStore', JSON.stringify(state));
	});
	
};

// EXPORTS
export default localStoragePlugin;
