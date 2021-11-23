import React, { Component } from 'react';

let evenOddString='';

class Counter extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  
  decrement() {
    if ( this.state.count > 0 )
       this.setState({ count: this.state.count - 1 });
  }
  
  reset() {
    this.setState({ count: 0 });
  }

  evenOdd(){
    if(this.state.count % 2 === 0){
      evenOddString='Введено четное число';
      var color = document.getElementsByClassName("Counter");
      for(var i = 0; i < color.length; i++)
        color[i].style.backgroundColor = "cyan";
    }
    else
    {
      evenOddString='Введено нечетное число';
      var color = document.getElementsByClassName("Counter");
      for(var i = 0; i < color.length; i++)
        color[i].style.backgroundColor = "yellow";
    }
  }
  render() {
    let { count } = this.state;
    this.evenOdd();

    return (
      <div className="Counter">
        <section className="countPanel">
          <p className="count">{count}</p>
        </section>
        <section className="evenOddPanel">
          <p className="evenOdd">{evenOddString}</p>
        </section>
        <section className="controlsPanel">
          <button id='decrementButton' onClick={this.decrement.bind(this)}>-</button>
          <button id='resetButton' onClick={this.reset.bind(this)}>Reset</button>
          <button id='incrementButton' onClick={this.increment.bind(this)}>+</button>
        </section>
      </div>
    );
  }
}

export default Counter;
