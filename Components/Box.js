"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Box = (props) => {

  // Use useEffect for conditional rendering of block4


  return (
    <div className='container'>
      <div>
        <div id="heading">{props.heading}</div>
        <div id='subheading'>{props.subheading}</div>
      </div>
      <div className='activity-box'>
        <div className='block3'>{props.block3}</div>
        <div className='block4'>{props.block4}</div>
      </div>
    </div>
  );
}

export default Box;
