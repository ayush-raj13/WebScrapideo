import React from 'react';
import Panel from './Panel';

function RadioButtonGroup(props) {
  return (
    <div className='flex space-x-4'>
      <Panel className='w-32 text-gray-800 dark:bg-gray-800 dark:text-gray-200'>
        <label>
          <input type="radio" value="URL" checked={props.selectedOption === 'URL'} onChange={props.handleChange} />
          &emsp; URL
        </label>
      </Panel>
      <Panel className='w-32 text-gray-800 dark:bg-gray-800 dark:text-gray-200'>
        <label>
          <input type="radio" value="text" checked={props.selectedOption === 'text'} onChange={props.handleChange} />
          &emsp; Text
        </label>
      </Panel>
    </div>
  );
}

export default RadioButtonGroup;
