import React from 'react';
import './loader.scss';

export default function Loader(props) {
    return (
        
        <div className="loader-container">
            <div className='overlay'></div>
            <div className="absolute w-1/4 top-50 p-3 text-center left-50 bg-white border border-gray-400" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className='lds-spinner'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>Loading</div>
            </div>
        </div>
    );
}
