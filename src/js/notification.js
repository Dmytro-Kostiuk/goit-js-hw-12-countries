import * as PNotify from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';

const notifications = {
  onNull() {
    PNotify.info({
      title: 'Nothing found on your query',
      text: 'Check please the validity of entering country, and try again',
    });
  },
  onTooMuch() {
    PNotify.error({
      title: 'Too many matches found',
      text: 'Please enter a more specific query!',
    });
  },

  onError() {
    PNotify.error({
      title: 'Something went wrong',
      text: 'Please try again',
    });
  },
};
export default notifications;
