import { Component } from 'react';

class ClassComponent extends Component {
    state = {
        number: 0,
        fixedNumber: 7
    };
    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <div>{number}</div>
                <div>{fixedNumber}</div>
                <button onClick={() => {
                    this.setState(prevState => {
                        return { number: prevState.number + 1 };
                    }, () => {
                        console.log('setState 호출됨');
                        console.log(this.state);
                    }); //this.setState의 두 번째 인자로 callback 함수 등록 -> setState후 특정작업 수행시킴
                    this.setState(prevState => ({ number: prevState.number + 1 }));
                    //화살표 함수에서 값을 바로 반환하는 경우 {}와 return을 생략
                }}>+2</button>
            </div>
        )
    }
}

export default ClassComponent;