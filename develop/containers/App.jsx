/**
 * Created by Mike on 5/7/2018.
 */
import React,{Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthFormContainer from  './common/AuthForm.jsx'
import PostContainer from  './common/PostContainer.jsx'

class App extends Component {

    render() {
        return (
            <div className="container page-container">
                <header className="row">
                    Weblium test assignment
                </header>
                <AuthFormContainer />
                <PostContainer />
            </div>
        );
      }
}


export default App;

