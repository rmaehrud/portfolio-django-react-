import React from 'react';
import styled from "styled-components";

const Container = styled.div`

`;



const PostWrapper = ({children}) => {
    return (
        <div id="fh5co-header">
            <Container>
                {children}
            </Container>
        </div>
    );
};

export default PostWrapper;