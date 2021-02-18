import React, { Component } from 'react'
import { connect } from "react-redux";

import { createIncrementAction, createDecrementAction } from "@/redux/actions";

class Count extends Component {
    render() {
        return <div>Count</div>;
    }
}


const mapStateToProps = (state) => { 
    return { state };
}

const mapDispatchToProps = {
	createIncrementAction,
	createDecrementAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);


