import React, { useState } from 'react'
import Counter from './Counter'

export default function ArrayCounters() {

  const [count, setCount] = useState([]);

  const handleAddCounter = () => {
    let arr = [];
    for (let j = 0; j < count.length; j++) {
      if (count[j] % 2 === 0)
        arr.push(count[j] + 1);
      else
        arr.push(count[j]);
    }
    setCount([...arr, 0]);
  }

  const handleRemoveCounters = () => {
    setCount([...count.slice(0, 0)]);
  }

  const handleAdd = (index) => () => {
    let i = count;
    i[index] += 1;
    setCount([...i]);
  }

  const handleSubtract = (index) => () => {
    let i = count;
    if (i[index] > 0)
      i[index] -= 1;
    setCount([...i]);
  }

  const handleReset = (index) => () => {
    let i = count;
    i[index] = 0;;
    setCount([...i]);
  }

  const handleDelete = (index) => () => {
    let arr = [];
    for (let j = 0; j < count.length; j++) {
      if (j !== index)
        arr.push(count[j]);
    }
    let arr2 = [];
    for (let j = 0; j < arr.length; j++) {
      if ((arr[j] % 2 === 1) && (arr[j] > 0))
        arr2.push(arr[j] - 1);
      else
        arr2.push(arr[j]);
    }
    setCount([...arr2]);
  }

  return (
    <div className="ArrayCounters">
      <section className="countPanel">
        <h3>Amount counters : {count.length}</h3>
        <h3>Sum counters : {count.reduce((sum, current) => sum + current, 0)}</h3>
      </section>
      <section className="counterPanel">
        {
          count.map(
            (value, index) =>
              <Counter key={index} value={value} onAdd={handleAdd(index)} onSubtract={handleSubtract(index)} onReset={handleReset(index)} onDelete={handleDelete(index)} />
          )
        }
      </section>
      <section className="buttonsPanel">
        <button id='addCounterButton' onClick={handleAddCounter}>
          Add Counter
        </button>
        <button id='removeCountersButton' onClick={handleRemoveCounters}>
          Remove Counter
        </button>
      </section>
    </div>
  )
}

