import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';
 
const propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    styles: PropTypes.object
}
 
const defaultProps = {
    styles: {
       
    }
}
 
class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            status: "active",
            name: ""
        }
    }
 
    handleChange(e) {
        console.log(e.target.value);
        this.setState({ name: e.target.value});
        //this.props.label = e.target.value;
    }
     
    render() {
        const styles = this.props.styles || {};
 
        return (
            <div>
                <h1 className="headline">{this.state.name}</h1>
                <div className="form-group">
                <input className="form-control" type="text" onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}
 
App.propTypes = propTypes;
App.defaultProps = defaultProps;
 
export default App;