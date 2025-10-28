/**
 * This file contains my preferred fix among several suggested for the issue 
 * https://github.com/creativetimofficial/material-tailwind/issues/528.  A very 
 * cursory reading thereof has me believe that material-tailwind does not yet 
 * account for certain attribute types added in React after version 18.2.42.  
 * The following code explicitly declares them to be optional to prevent type 
 * errors when using Card, Typography, etc.
 */

import React from 'react'

declare module 'react' {
  interface HTMLAttributes {
    placeholder?: string
    onPointerEnterCapture?: React.PointerEventHandler
    onPointerLeaveCapture?: React.PointerEventHandler
		onResize?: React.ReactEventHandler
		onResizeCapture?: React.ReactEventHandler
  }
}

