/**
 * Created by Mike on 5/7/2018.
 */
import React,{Component} from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {sendPost} from './../../actions/twitter.actions';


class PostForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            postText: '',
        };
    }

    onInputTextChange = (e) =>{
        this.setState({postText:e.target.value})
    }
    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.sendPost(this.state.postText);
    }


    render(){
        return(
            <div>
                <div>
                    <form onSubmit={this.onFormSubmitted}>
                        <input type="text" onChange={this.onInputTextChange}/>
                        <button type="submit">
                            Submit tweet
                        </button>
                    </form>
                </div>
            </div>
        )
    }
};

PostForm.propTypes = {

};

const mapStateToProps = (state) =>({
    authName:state.twitter.name,
});
const mapDispatchToProps = (dispatch) =>({
    sendPost:bindActionCreators(sendPost,dispatch),
});

export default connect(mapStateToProps,mapDispatchToProps)(PostForm);