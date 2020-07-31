import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';


export function PageDefault(props) {
    return (
        <div>
            <Menu />

                {props.chil}

            <Footer />
        </div>
    )
};

export default PageDefault;
