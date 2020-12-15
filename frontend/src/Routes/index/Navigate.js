import React from 'react';
import {Button} from 'semantic-ui-react';
import './Navigate.css'

const Navigate = ({onClick, postId, disabled}) => (
    <div className="container">
    <div className="Navigate">
        <Button
            color="grey"
            content="Previous"
            icon="left arrow"
            labelPosition="left"
            onClick={
                () => onClick('PREV')
            }
            disabled={disabled}
        />
        <div className="Navigate-page-num">
        {postId}
        </div>
        <Button
            color="grey"
            content="Next"
            icon="right arrow"
            labelPosition="right"
            className="Navigate-right-button"
            onClick={
                () => onClick('NEXT')
            }
            disabled={disabled}
        /> 
    </div>
    </div>
);

export default Navigate;