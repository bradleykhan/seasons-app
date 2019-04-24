import React from "react";

const LoadingPage = props => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

LoadingPage.defaultProps = {
    message: "Loading..."
};

export default LoadingPage;
