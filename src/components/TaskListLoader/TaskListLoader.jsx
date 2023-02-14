import React from "react";
import ContentLoader from 'react-content-loader';

const TaskListLoader = props => {
    return (
      <ContentLoader
        speed={2}
        width={props.width}
        height={props.height}
        viewBox={props.viewBox}
        backgroundColor="#17413d"
        foregroundColor="#07b3a4"
        {...props}
      >
        
        <rect x="0" y="540" rx="5" ry="5" width="100%" height="64" />
        <rect x="0" y="620" rx="5" ry="5" width="100%" height="64" />
        <rect x="0" y="700" rx="5" ry="5" width="100%" height="64" />
      </ContentLoader>
    )
  }
  
  TaskListLoader.metadata = {
    name: 'Abraham Calsin',
    github: 'abrahamcalsin',
    description: 'Loading a list of tasks.',
    filename: 'TaskList',
  }
  
  export { TaskListLoader }