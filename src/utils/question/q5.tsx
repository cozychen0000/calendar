import React from "react";
/** Can you explain the problem with the following code, and how to fix
it. **/

// react 中，react 會先存取原本的快照，並批次處理來提升效能，因此原本的寫法會導致 每個 state.count 都是 舊的值
// 當按下的時候，每個都回從舊的值+1，因此執行三次依然是+1
// 若想要讓每次作用都成功，則需透過 prev 儲存值，並讓他在最後替換掉 
// 定義 State 的型別
interface CountState {
    count: number;
  }
export class Count extends React.Component<unknown, CountState> {
    constructor(props:unknown) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
    }
    handleAddCount(){
    this.setState(prev=>({ count: prev.count + 1 }));
    this.setState(prev=>({ count: prev.count + 1 }));
    this.setState(prev=>({ count: prev.count + 1 }));
    }
    
    render() {
    return (
    <div>
    <h2>{this.state.count}</h2>
    <button onClick={this.handleAddCount}>Add</button>
    </div>
    );
    }
    }

    // ReactDOM.render(
    //     <Count />,
    //     document.getElementById('root')
    //     );