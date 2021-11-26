import React from 'react';

const Counter = (props) => (
  <div>
    Count: {props.value}
    <button onClick={props.onAdd}>
      +
    </button>
    <button onClick={props.onSubtract}>
      -
    </button>
    <button onClick={props.onReset}>
      R
    </button>
    <button onClick={props.onDelete}>
      X
    </button>
    <hr />
  </div>
)

export default Counter
