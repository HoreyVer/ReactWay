import React from 'react';
import preloader from "../../../assets/images/loader.gif";

type PreloaderPropsTypes = {

}

const Preloader = (props: PreloaderPropsTypes) => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader}/>
    </div>
}

export default Preloader