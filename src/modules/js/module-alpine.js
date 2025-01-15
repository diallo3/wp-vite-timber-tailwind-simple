import Alpine from 'alpinejs';

export function initializeAlpine() {
    if (typeof Alpine !== 'undefined' && !window.Alpine) {
        window.Alpine = Alpine
        Alpine.start()
    }
}