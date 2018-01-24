import { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
//https://www.robinwieruch.de/react-eslint-webpack-babel/
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new moment(),
        }
    }

    componentWillMount() {
        this.startTimer();
    }

    componentDidCatch(error, info) {
        this.setState({error, info});
    }

    resolveData(data) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('BOUNDAY' + data);
            }, 12000);
        });
    }

    async getData(data) {
        const x = await this.resolveData(data);
        console.log(x);
        return x;
    }

    startTimer() {
        console.log(this.getData('WHAT'));
        this.timer = setInterval(() => {
            this.setState({
                time: new moment(),
            });
        }, 1000);
    }

    render(){
        return !this.state.error ? <div> {this.state.time.format('hh:mm:ss')} </div> : <div> Error! </div>
    }

}

ReactDOM.render(<App />, document.getElementById("app-root"));