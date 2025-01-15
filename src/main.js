// Vite Stuff
// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
	import.meta.hot.accept(() => {
		console.log('HMR');
	});
}

// Import JS Modules
import { initializeAlpine } from './modules/js/module-alpine';

// SCSS
import './style.css';

// glob import all scss files
import.meta.glob('../templates/**/*.css', { eager: true });

document.addEventListener('DOMContentLoaded', () => {
	initializeAlpine();
});
