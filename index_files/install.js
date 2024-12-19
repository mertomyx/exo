let deferredPrompt;
const installButton = document.getElementById('installButton');

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    installButton.style.display = 'block';
});

installButton.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const outcome = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            console.log('User accepted the installation');
            installButton.style.display = 'none';
        }
        deferredPrompt = null;
    }
});
window.addEventListener('appinstalled', () => {
    installButton.style.display = 'none';
    console.log('PWA was installed');
});