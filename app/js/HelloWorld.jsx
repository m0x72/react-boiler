import React from 'react';

export default class HelloWorld extends React.Component {
  render() {
    // Play with it...
    const name = 'Worlee:d';

    return (
      <div>
          <input />
          <h2 className="hello-world">
            <span className="hello-world__i">Hellö, {name}</span>
          </h2>
      </div>
    );
  }
}
