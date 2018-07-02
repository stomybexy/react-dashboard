import React from 'react';

const ProgressBar = ({ percent }) => (
    <div>
        <div className={`progressbar progressbar--${percent}`}/>
    </div>
);

export default ProgressBar;