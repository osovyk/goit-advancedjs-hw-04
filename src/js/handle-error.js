import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function handleError(message) {
  iziToast.show({
    message,
    position: 'topRight',
    timeout: 5000,
    backgroundColor: '#EF4040',
    messageColor: '#FAFAFB',
    iconUrl: './assets/icons/close-icon.svg',
    closeOnEscape: true,
    closeOnClick: true,
    maxWidth: '432px',
  });
}

export { handleError };
