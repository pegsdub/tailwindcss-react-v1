import React from "react";
import { InlineWidget } from "react-calendly";

const App = () => {
    return (
        <div className="App">
            <InlineWidget url="https://calendly.com/nathan-pegram/introductory-meeting" />
        </div>
    );
};

export default App;