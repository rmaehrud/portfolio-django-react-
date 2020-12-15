import React, {Component} from 'react';
import PostWrapper from './PostWrapper';
import MainTitle from "./MainTitle";
import Navigate from "./Navigate";
import Post from "./Post";
import Footer from "./Footer";
import * as service from '../../api';

class PostContainer extends Component {

    componentDidMount() {
        this.fetchPostInfo(1);
    }

    constructor(props) {
        super();
        // initializes component state
        this.state = {
            postId: 0,
            fetching: false, // tells whether the request is waiting for response or not
            post: {
                title: null,
                subtitle: null,
                content: null,
                bigimage: null,
                smallimage: null,
                link: null
            }
        };
    }


    fetchPostInfo = async (postId) => {
        
        this.setState({
            fetching: true // requesting..
        });


        try {
        // wait for two promises
        const info = await Promise.all([
            service.getPost(postId)
        ]);
        
        // Object destructuring Syntax,
        // takes out required values and create references to them
        const {title,subtitle,content,bigimage,smallimage,link} = info[0].data; 

        this.setState({
            postId,
            post: {
                title,
                subtitle,
                content,
                bigimage,
                smallimage,
                link
            },
            fetching: false // done!
        });

    } catch(e) {
            // if err, stop at this point
            this.setState({
                fetching: false
            });
            console.log('error occurred', e);
    }
    }

    handleNavigateClick = (type) => {
        const postId = this.state.postId;

        if(type === 'NEXT') {
            this.fetchPostInfo(postId+1);
        } else {
            this.fetchPostInfo(postId-1);
        }
    }

    render() {
        const { post,postId,fetching } = this.state;
        return (
            <PostWrapper>
                <MainTitle/>
                <Navigate
                postId={postId}
                disabled={fetching}
                onClick={this.handleNavigateClick}
                />
                <Post
                title={post.title}
                subtitle={post.subtitle}
                content={post.content}
                bigimage={post.bigimage}
                smallimage={post.smallimage}
                link={post.link}
                />
                <Footer/>
            </PostWrapper>
        );
    }
}

export default PostContainer;