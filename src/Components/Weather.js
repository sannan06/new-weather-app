import React from "react";

class Weather extends React.Component {
    render(){
        return(
            <div>
                {this.props.temperatre}
            </div>
        );
    }
}

export default Weather