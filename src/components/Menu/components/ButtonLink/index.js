import React from 'react';

function ButtonLink(props) {

    return (
        console.log(props),
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
};

export default ButtonLink;