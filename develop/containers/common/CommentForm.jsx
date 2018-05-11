/**
 * Created by Mike on 5/7/2018.
 */
import React,{Component} from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addComment} from './../../actions/twitter.actions';


class CommentForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            commentText: '',
        };
    }

    onInputTextChanged = (e) => {
        this.setState({commentText:e.target.value});
    }

    onFormSubmitted = (e) => {
        e.preventDefault();
        this.props.addComment(this.state.commentText,this.props.postId);
    }

    render(){
        return(
            <div>
                <div>
                    <form onSubmit={this.onFormSubmitted}>
                        <input type="text" onChange={this.onInputTextChanged}/>
                        <button type="submit">
                            Submit comment
                        </button>
                    </form>
                </div>
            </div>
        )
    }
};

CommentForm.propTypes = {
    postId:propTypes.number,
    addComment:propTypes.func
};

const mapDispatchToProps = (dispatch) =>({
    addComment:bindActionCreators(addComment,dispatch),
});

export default connect(null,mapDispatchToProps)(CommentForm);