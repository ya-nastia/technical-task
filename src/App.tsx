import React from "react";
import { Comments } from "./components/Comments";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <>
            <Comments />
            <ToastContainer position="bottom-right" />
        </>
    );
}

export default App;
