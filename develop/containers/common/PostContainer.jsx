/**
 * Created by Mike on 5/7/2018.
 */
import React,{Component} from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PostForm from  './PostForm.jsx';
import CommentsPostContainer from  './CommentContainer.jsx';

class PostContainer extends Component {

    constructor(props){
        super(props);

    }


    render(){
        return(
            <div>
                <div>
                    <ul>
                    {
                        this.props.twitter.post.map((i,index) => (<CommentsPostContainer postId={index} name={i.name} text={i.text}/>))
                    }
                    </ul>
                   <PostForm />
                </div>
            </div>
        )
    }
};

PostContainer.propTypes = {
    twitter:propTypes.object
};

const mapStateToProps = (state) =>({
    twitter:state.twitter
});


export default connect(mapStateToProps)(PostContainer);