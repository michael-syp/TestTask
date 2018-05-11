/**
 * Created by Mike on 5/7/2018.
 */
import React,{Component} from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {sendPost} from './../../actions/twitter.actions';
import CommentForm from './CommentForm.jsx';


class CommentContainer extends Component {

    constructor(props){
        super(props);

        this.state = {
            postText: '',
        };
    }

    render(){
        return(
            <div>
                {this.props.name} twitted {this.props.text}
                <ul>
                    {this.props.twitter.post[this.props.postId]?
                        this.props.twitter.post[this.props.postId].comments.map((i) => (<li>{i.name} commented {i.text}</li>))
                        :
                        null
                    }
                </ul>
                <CommentForm postId={this.props.postId}/>
            </div>
        )
    }
};

CommentContainer.propTypes = {
    postId:propTypes.number,
    twitter:propTypes.object,
    addComment:propTypes.func
};

const mapStateToProps = (state) =>({
    twitter: state.twitter
});

export default connect(mapStateToProps)(CommentContainer);