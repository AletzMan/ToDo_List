import React from "react";
import ContentLoader from 'react-content-loader';

const TaskList = props => {
    return (
      <ContentLoader
        speed={2}
        width={props.width}
        height={props.height}
        viewBox={props.viewBox}
        backgroundColor="#d9d9d9"
        foregroundColor="#ededed"
        {...props}
      >
               
        <rect x="32" y="540" rx="5" ry="5" width="80%" height="64" />
        <rect x="0" y="620" rx="5" ry="5" width="100%" height="64" />
        <rect x="0" y="700" rx="5" ry="5" width="100%" height="64" />
        <rect x="0" y="780" rx="5" ry="5" width="100%" height="64" />
        <rect x="0" y="860" rx="5" ry="5" width="100%" height="64" />
        <rect x="0" y="940" rx="5" ry="5" width="100%" height="64" />
        <rect x="0" y="1020" rx="5" ry="5" width="100%" height="64" />
        
      </ContentLoader>
    )
  }
  
  TaskList.metadata = {
    name: 'Abraham Calsin',
    github: 'abrahamcalsin',
    description: 'Loading a list of tasks.',
    filename: 'TaskList',
  }
  
  export { TaskList}