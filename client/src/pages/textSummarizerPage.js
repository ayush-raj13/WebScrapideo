import Panel from '../components/Panel';
import Dropdown from '../components/Dropdown'
import Button from '../components/Button'
import { useState } from 'react';
import RadioButtonGroup from '../components/RadioButtonGroup';
import Table from '../components/Table';
import Hero from '../components/Hero';
import axios from 'axios';

function TextSummarizerPage() {
  const [methodSelection, setMethodSelection] = useState(null);
  const [languageSelection, setLanguageSelection] = useState(null);
  const [sentenceCount, setSentenceCount] = useState(null);
  const [selectedInputType, setSelectedInputType] = useState('URL');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleMethodSelect = (option) => {
    setMethodSelection(option);
  };

  const handleLanguageSelect = (option) => {
    setLanguageSelection(option);
  };

  const handleSentenceCountChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    setSentenceCount(value);
  }

  function handleInputTypeChange(event) {
    setSelectedInputType(event.target.value);
  }

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleOutputChange(event) {
    setOutput(event.target.value);
  }

  function handleClear() {
    setInput('');
  }

  async function handleSubmit() {
    setLoading(true);
    setOutput('Loading...');
    const body = {
      data:[methodSelection.value, languageSelection.value, sentenceCount, selectedInputType, input]
    };
    try {
      const response = await axios.post('https://text-summarizer-qehl.onrender.com/run/predict', body);

      setLoading(false);
      setOutput(response.data);
    } catch {
      setLoading(false);
      setOutput('Error fetching data. Please use another method.');
    }
  }

  const methodOptions = [
    { label: 'LSA', value: 'LSA' },
    { label: 'luhn', value: 'luhn' },
    { label: 'edmundson', value: 'edmundson' },
    { label: 'text-rank', value: 'text-rank' },
    { label: 'lex-rank', value: 'lex-rank' },
    { label: 'random', value: 'random' },
    { label: 'reduction', value: 'reduction' },
    { label: 'kl-sum', value: 'kl-sum' },
  ];

  const languageOptions = [
    { label: 'English', value: 'english' },
    { label: 'French', value: 'french' },
    { label: 'Arabic', value: 'arabic' },
    { label: 'Chinese', value: 'chinese' },
    { label: 'Czech', value: 'czech' },
    { label: 'German', value: 'german' },
    { label: 'Italian', value: 'italian' },
    { label: 'Hebrew', value: 'hebrew' },
    { label: 'Japanese', value: 'japanese' },
    { label: 'Portuguese', value: 'portuguese' },
    { label: 'Slovak', value: 'slovak' },
    { label: 'Spanish', value: 'spanish' },
    { label: 'Ukrainian', value: 'ukrainian' },
    { label: 'Greek', value: 'greek' },
  ];

  const tableData = [
    { _id: 1, method: 'luhn', language: 'English', sentenceCount: 5, inputType: 'URL', input: 'https://en.wikipedia.org/wiki/George_Washington'},
  ];

  const config = [
    {
        label: 'Method',
        render: (example) => example.method,
    },
    {
        label: 'Language',
        render: (example) => example.language,
    },
    {
        label: 'Sentence Count',
        render: (example) => example.sentenceCount,
    },
    {
      label: 'Input Type',
      render: (example) => example.inputType,
    },
    {
      label: 'Input',
      render: (example) => example.input,
    }
  ];

  return (
    <div className="flex flex-col space-y-8 justify-center items-center min-h-screen  text-gray-800 dark:bg-gray-800 dark:text-gray-200">
      <Hero title='Text Summarizer' desc='An app that provides text summarization capabilities, allowing users to generate summaries from their own text or retrieve summaries from URLs, such as Wikipedia articles.'/>

      <Panel className='flex flex-col space-y-8  text-gray-800 dark:bg-gray-800 dark:text-gray-200'>
        <div className='flex flex-col space-y-4'>
          <label>Method</label>
          <Dropdown options={methodOptions} value={methodSelection} onChange={handleMethodSelect} />
        </div>
        <div className='flex flex-col space-y-4'>
          <label>Language</label>
          <Dropdown options={languageOptions} value={languageSelection} onChange={handleLanguageSelect} />
        </div>
        <div className='flex flex-col space-y-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200'>
          <label>Sentence Count</label>
          <input value={sentenceCount || ''} onChange={handleSentenceCountChange} type="number" className="py-1 my-3 bg-gray-50 border border-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-200"/>
        </div>
        <div className='flex flex-col space-y-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200'>
          <label>Input Type</label>
          <RadioButtonGroup selectedOption={selectedInputType} handleChange={handleInputTypeChange} />
        </div>
        <div className='flex flex-col space-y-4'>
          <label>Input</label>
          <textarea rows="5" value={input} onChange={handleInputChange} className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:bg-gray-700 dark:text-gray-200"/>
        </div>
        <div className='flex space-x-4'>
          <Button warning rounded outline className='text-yellow-600 dark:bg-gray-800 dark:text-gray-200' onClick={handleClear}>Clear</Button>
          <Button success rounded outline className=" text-gray-800 dark:bg-gray-800 dark:text-gray-200" onClick={handleSubmit}>{loading ? <>Loading..</> : <>Submit</>}</Button>
        </div>
        <div className='flex flex-col space-y-4'>
          <label>Example</label>
          <Table data={tableData} config={config} />
        </div>
        <div className='flex flex-col space-y-4'>
          <label>Output</label>
          <textarea rows="10" value={output} onChange={handleOutputChange} className="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:bg-gray-700 dark:text-gray-200"/>
        </div>
      </Panel>
    </div>
  ) 
}

export default TextSummarizerPage