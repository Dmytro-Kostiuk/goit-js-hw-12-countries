import { template } from 'handlebars';
import debounce from 'lodash.debounce';
import './styles.css';
import renderCountry from './js/renderCountry';
import notifications from './js/notification';

import getRefs from './js/refs';
import API from './js/fetchCountry';

const ref = getRefs();

ref.inputRef.addEventListener(
  'input',
  debounce(event => {
    ref.Render.innerHTML = '';
    const searchString = event.target.value;
    if (searchString === '') {
      return;
    }

    API.fetchCountry(searchString)
      .then(renderCountry)
      .catch(error => {
        notifications.onError();
      });
  }, 500),
);
