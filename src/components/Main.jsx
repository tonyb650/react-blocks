import { useState } from 'react';
import styles from './main.module.css';

const Main = (props) => {

    return (
        <>
            <div className= { styles.mainDiv} >
                { props.children}
            </div>
        </>
    )
}

export default Main;
