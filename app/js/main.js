import React from 'react';

import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom';

// It's important to not define HelloWorld component right in this file
// because in that case it will do full page reload on change
import HelloWorld from './HelloWorld.jsx';

//React.render(<HelloWorld />, document.getElementById('react-root'));

const rootElem = document.getElementById('react-root');

ReactDOM.render(
  <AppContainer>
    <HelloWorld />
  </AppContainer>,
  rootElem
);

if (module.hot) {
  module.hot.accept('./HelloWorld.jsx', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    // -> Leads to pagereload on changes in NextApp
    const NextApp = require('./HelloWorld.jsx').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootElem
    );
  });
}
