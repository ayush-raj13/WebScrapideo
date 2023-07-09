import { useState } from "react";
import Hero from "../components/Hero";
import Panel from "../components/Panel";
import Button from "../components/Button";
import axios from 'axios';
import Table from "../components/Table";

function VideoDownloaderPage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const handleUrlSubmit = async () => {
    setLoading(true);
    setIsError(false);
    const body = {
      data: url
    }

    try {
      const response = await axios.post('http://localhost:3003/get-info', body);
      setLoading(false);
      setData(response.data)
    } catch {
      setLoading(false);
      setIsError(true);
    }
  }

  let buttonText = !isError && !loading ? <>Submit</> : <>Loading...</>;
  buttonText = isError ? <>Error</> : buttonText;

  const config = [
    {
        label: 'Link',
        render: (data) => 
        <a 
          href={data.url}
          style={{ //pass other props, like styles
            boxShadow:"inset 0px 1px 0px 0px #e184f3",
            background:"linear-gradient(to bottom, #c123de 5%, #a20dbd 100%)",
            backgroundColor:"#c123de",
            borderRadius:"6px",
            border:"1px solid #a511c0",
            display:"inline-block",
            cursor:"pointer","color":"#ffffff",
            fontSize:"15px",
            fontWeight:"bold",
            padding:"6px 24px",
            textDecoration:"none",
            textShadow:"0px 1px 0px #9b14b3"
          }}
        >
          Download
        </a>,
    },
    {
        label: 'ID',
        render: (data) => data.format
    },
    {
        label: 'EXT',
        render: (data) => data.ext,
    },
    {
      label: 'RESOLUTION',
      render: (data) => data.resolution || "unknown",
    },
    {
      label: 'PROTOCOL',
      render: (data) => data.protocol || "unknown",
    },
    {
      label: 'VCODEC',
      render: (data) => data.vcodec || "unknown",
    },
    {
      label: 'ACODEC',
      render: (data) => data.acodec || "unknown",
    }
];

  return (
    <div className="flex flex-col space-y-8 justify-center items-center min-h-screen">
      <Hero title="Online Video Downloader" desc="Download videos from any website hassle-free! Our online video downloader supports countless platforms, making it easy to save your favorite videos for offline enjoyment."/>
      <Panel className='flex flex-col space-y-8'>
      <div className='flex flex-col space-y-4'>
        <label>Enter URL</label>
        <input value={url} onChange={handleUrlChange} type="text" className="py-1 my-3 bg-gray-50 border border-gray-300"/>
        <div className="flex justify-center">
          <Button success rounded outline onClick={handleUrlSubmit} disabled={loading}>
          {buttonText}
          </Button>
        </div>
      </div>
      <Panel className='flex flex-col space-y-4'>
        <label className="font-bold">Note:</label>
        <ul style={{listStyleType:"disc"}} className="font-bold">
          <li>acodec='none' means there is no audio</li>
          <li>vcodec='none' means there is no video</li>
          <li><a className="text-blue-700 underline visited:text-violet-800" href="https://www.onlineconverter.com/add-audio-to-video">Click here</a> to merge audio and video.</li>
        </ul>
      </Panel>
      <div className='flex flex-col space-y-4'>
        <Table data={data} config={config} />
      </div>
      <Panel className='flex flex-col space-y-4'>
        <label className="font-bold">Note: To download videos with m3u8_native protocol</label>
        <ul style={{listStyleType:"disc"}} className="font-bold">
          <li>Copy download link (generated from this website) for selected m3u8_native protocol.</li>
          <li><a className="text-blue-700 underline  visited:text-violet-800" href="https://hls-downloader-tau.vercel.app/">Click here</a> to open the website.</li>
          <li>Paste the link and click on download button.</li>
        </ul>
      </Panel>
      </Panel>
    </div>
  )
}

export default VideoDownloaderPage