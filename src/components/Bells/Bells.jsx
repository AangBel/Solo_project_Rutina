import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function Bells() {
  return (
    <div className="container">
      <div>
        <p>This about page is for anyone to read!</p>
        <p>This is now the Bells page</p>
      </div>
    </div>
  );
}

export default Bells;
