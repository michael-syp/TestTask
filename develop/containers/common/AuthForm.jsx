/**
 * Created by Mike on 5/7/2018.
 */
import React,{Component} from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {setUserAutorised} from './../../actions/twitter.actions';

class AuthFormContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            userName: '',
        };
    }

    onInputTextChange = (e) =>{
        this.setState({userName:e.target.value})
    }
    onFormSubmitted = (e) =>{
        e.preventDefault();
        this.props.setUserAuthorised(this.state.userName);
    }


    render(){
        return(
            <div>
                <div>
                {
                    this.props.authName?
                        (<span>
                            You are authorised as {this.props.authName}
                        </span>):
                        <span>
                            You are not authorised, you can't send tweet or comment
                        </span>
                }
                </div>
                <form onSubmit={this.onFormSubmitted}>
                    <input type="text" onChange={this.onInputTextChange}/>
                    <button type="submit">
                        SignIn
                    </button>
                </form>
            </div>
        )
    }
};

AuthFormContainer.propTypes = {
    authName:propTypes.string,
    setUserAuthorised: propTypes.func
};

const mapStateToProps = (state) =>({
    authName:state.twitter.name
});
const mapDispatchToProps = (dispatch) =>({
    setUserAuthorised: bindActionCreators(setUserAutorised,dispatch),
});

export default connect(mapStateToProps,mapDispatchToProps)(AuthFormContainer);