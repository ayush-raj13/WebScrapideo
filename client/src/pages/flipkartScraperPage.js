import { useState } from "react"
import Hero from "../components/Hero"
import Panel from "../components/Panel"
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import SortableTable from "../components/SortableTable";
import CsvDownloadButton from 'react-json-to-csv';
import axios from 'axios';
import { Footer } from "../components/Footer";

function FlipkartScraperPage() {
  const [url, setUrl] = useState('');
  const [query, setQuery] = useState('');
  const [isProductNameChecked, setIsProductNameChecked] = useState(true);
  const [isCurrentPriceChecked, setIsCurrentPriceChecked] = useState(true);
  const [isOriginalPriceChecked, setIsOriginalPriceChecked] = useState(true);
  const [isDiscountChecked, setIsDiscountChecked] = useState(true);
  const [isRatingChecked, setIsRatingChecked] = useState(true);
  const [isFassuredChecked, setIsFassuredChecked] = useState(true);
  const [isHighlightsChecked, setIsHighlightsChecked] = useState(true);
  const [isSellerChecked, setIsSellerChecked] = useState(true);
  const [isSellerRatingChecked, setIsSellerRatingChecked] = useState(true);
  const [isDescriptionChecked, setIsDescriptionChecked] = useState(true);
  const [isStockChecked, setIsStockChecked] = useState(true);
  const [isImageUrlChecked, setIsImageUrlChecked] = useState(true);
  const [isProductUrlChecked, setIsProductUrlChecked] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState([]);

  const [showProductNameInTable, setShowProductNameInTable] = useState(true);
  const [showCurrentPriceInTable, setShowCurrentPriceInTable] = useState(true);
  const [showOriginalPriceInTable, setShowOriginalPriceInTable] = useState(true);
  const [showDiscountInTable, setShowDiscountInTable] = useState(true);
  const [showRatingInTable, setShowRatingInTable] = useState(true);
  const [showFassuredInTable, setShowFassuredInTable] = useState(true);
  const [showHighlightsInTable, setShowHighlightsInTable] = useState(true);
  const [showSellerInTable, setShowSellerInTable] = useState(true);
  const [showSellerRatingInTable, setShowSellerRatingInTable] = useState(true);
  const [showDescriptionInTable, setShowDescriptionInTable] = useState(true);
  const [showStockInTable, setShowStockInTable] = useState(true);
  const [showImageUrlInTable, setShowImageUrlInTable] = useState(true);
  const [showProductUrlInTable, setShowProductUrlInTable] = useState(true);

  const handleUrlChange = (event) => {
    setUrl(event.target.value)
  }

  const handleQueryChange = (event) => {
    setQuery(event.target.value)
  }

  const handleProductNameSelection = () => {
    setIsProductNameChecked((prev) => !prev)
  }

  const handleCurrentPriceSelection = () => {
    setIsCurrentPriceChecked((prev) => !prev)
  }

  const handleOriginalPriceSelection = () => {
    setIsOriginalPriceChecked((prev) => !prev)
  }

  const handleDiscountSelection = () => {
    setIsDiscountChecked((prev) => !prev)
  }

  const handleRatingSelection = () => {
    setIsRatingChecked((prev) => !prev)
  }

  const handleFassuredSelection = () => {
    setIsFassuredChecked((prev) => !prev)
  }

  const handleHighlightsSelection = () => {
    setIsHighlightsChecked((prev) => !prev)
  }

  const handleSellerSelection = () => {
    setIsSellerChecked((prev) => !prev)
  }

  const handleSellerRatingSelection = () => {
    setIsSellerRatingChecked((prev) => !prev)
  }

  const handleDescriptionSelection = () => {
    setIsDescriptionChecked((prev) => !prev)
  }

  const handleStockSelection = () => {
    setIsStockChecked((prev) => !prev)
  }

  const handleImageUrlSelection = () => {
    setIsImageUrlChecked((prev) => !prev)
  }

  const handleProductUrlSelection = () => {
    setIsProductUrlChecked((prev) => !prev)
  }

  const handleUrlSubmit = async () => {
    setLoading(true);
    setIsError(false);
    const body = {
      url: url,
      Product_name: isProductNameChecked,
      Current_price: isCurrentPriceChecked,
      Original_price: isOriginalPriceChecked,
      Discount: isDiscountChecked,
      Rating: isRatingChecked,
      Fassured: isFassuredChecked,
      Highlight: isHighlightsChecked,
      Seller: isSellerChecked,
      SellerRating: isSellerRatingChecked,
      Description: isDescriptionChecked,
      Stock: isStockChecked,
      Image_src: isImageUrlChecked,
      Product_url: isProductUrlChecked
    }

    try {
      const response = await axios.post('https://flipkart-scraper.onrender.com/run/generate', body);
      setLoading(false);
      setData(response.data)
      setShowProductNameInTable(isProductNameChecked)
      setShowCurrentPriceInTable(isCurrentPriceChecked)
      setShowOriginalPriceInTable(isOriginalPriceChecked)
      setShowDiscountInTable(isDiscountChecked)
      setShowRatingInTable(isRatingChecked)
      setShowFassuredInTable(isFassuredChecked)
      setShowHighlightsInTable(isHighlightsChecked)
      setShowSellerInTable(isSellerChecked)
      setShowSellerRatingInTable(isSellerRatingChecked)
      setShowDescriptionInTable(isDescriptionChecked)
      setShowStockInTable(isStockChecked)
      setShowImageUrlInTable(isImageUrlChecked)
      setShowProductUrlInTable(isProductUrlChecked)
    } catch {
      setLoading(false);
      setIsError(true);
    }
  }

  const handleQuerySubmit = async () => {
    setLoading(true);
    setIsError(false);
    const body = {
      url: `https://www.flipkart.com/search?q=${encodeURIComponent(query)}&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&page=`,
      Product_name: isProductNameChecked,
      Current_price: isCurrentPriceChecked,
      Original_price: isOriginalPriceChecked,
      Discount: isDiscountChecked,
      Rating: isRatingChecked,
      Fassured: isFassuredChecked,
      Highlight: isHighlightsChecked,
      Seller: isSellerChecked,
      SellerRating: isSellerRatingChecked,
      Description: isDescriptionChecked,
      Stock: isStockChecked,
      Image_src: isImageUrlChecked,
      Product_url: isProductUrlChecked
    }

    try {
      const response = await axios.post('https://flipkart-scraper.onrender.com/run/generate', body);
      setLoading(false);
      setData(response.data)
    } catch {
      setLoading(false);
      setIsError(true);
    }
  }

  const config = [];

  if (showProductNameInTable) {
    config.push(
      {
        label: 'Product_name',
        render: (data) => <div className="group flex relative">
          <span>{data.Product_name.substring(0,20) + "..."}</span>
          <span className="w-60 group-hover:inline-block transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute
          translate-x-[43%] hidden">{data.Product_name}</span>
        </div>,
      }
    )
  }

  if (showCurrentPriceInTable) {
    config.push(
      {
        label: 'Current_price',
        render: (data) => data.Current_price,
        sortValue: (data) => data.Current_price === "N/A" ? "N/A" : parseInt(data.Current_price.replace("Rs ",""))
      }
    )
  }

  if (showOriginalPriceInTable) {
    config.push(
      {
        label: 'Original_price',
        render: (data) => data.Original_price,
        sortValue: (data) => data.Original_price === "N/A" ? parseInt(data.Current_price.replace("Rs ","")) : parseInt(data.Original_price.replace("Rs ",""))
      }
    )
  }

  if (showDiscountInTable) {
    config.push(
      {
        label: 'Discount',
        render: (data) => data.Discount,
        sortValue: (data) => data.Discount === "N/A" ? -1 : parseInt(data.Discount.replace("% off", ""))
      }
    )
  }

  if (showRatingInTable) {
    config.push(
      {
        label: 'Rating',
        render: (data) => data.Rating,
        sortValue: (data) => data.Rating === "No ratings yet" ? "0" : parseFloat((data.Rating.split(" ("))[0])
      }
    )
  }

  if (showFassuredInTable) {
    config.push(
      {
        label: 'Fassured',
        render: (data) => data.Fassured ? 'True' : 'False',
      }
    )
  }

  if (showHighlightsInTable) {
    config.push(
      {
        label: 'Highlights',
        render: (data) => data.Highlights !== "N/A" ? <div className="group flex relative">
          <span>{data.Highlights.substring(0,30) + "..."}</span>
          <span className="w-60 group-hover:inline-block transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute
          translate-x-[31%] hidden">{data.Highlights}</span>
        </div> : "N/A",
      }
    )
  }

  if (showSellerInTable) {
    config.push(
      {
        label: 'Seller',
        render: (data) => data.Seller,
      }
    )
  }

  if (showSellerRatingInTable) {
    config.push(
      {
        label: 'SellerRating',
        render: (data) => data.SellerRating,
        sortValue: (data) => data.SellerRating === "N/A" ? 0 : parseFloat(data.SellerRating)
      }
    )
  }

  if (showDescriptionInTable) {
    config.push(
      {
        label: 'Description',
        render: (data) => data.Description !== "N/A" ? <div className="group flex relative">
          <span>{data.Description.substring(0,30) + "..."}</span>
          <span className="w-56 group-hover:inline-block transition-opacity bg-gray-800 text-sm text-gray-100 rounded-md absolute
          translate-x-[33%] hidden">{data.Description}</span>
        </div> : "N/A",
      }
    )
  }

  if (showStockInTable) {
    config.push(
      {
        label: 'Stock',
        render: (data) => data.Stock ? 'True' : 'False',
      }
    )
  }

  if (showImageUrlInTable) {
    config.push(
      {
        label: 'Image_src',
        render: (data) => <a className="text-blue-500" href={data.Image_src}>Click here</a>,
      }
    )
  }

  if (showProductUrlInTable) {
    config.push(
      {
        label: 'Product_url',
        render: (data) => <a className="text-blue-500" href={data.Product_url}>Click here</a>,
      }
    )
  }

  let buttonText = !isError && !loading ? <>Submit</> : <>Loading...</>;
  buttonText = isError ? <>Error</> : buttonText;

  return (
    <div className="flex flex-col space-y-8 justify-center items-center min-h-screen dark:bg-gray-800">
      <Hero title="Flipkart Scraper" desc="An advanced Flipkart web scraper that combines automated data extraction capabilities with user-defined data selection, allowing users to effortlessly retrieve specific information of their choice from the Flipkart website with precision and efficiency."/>
    
      <Panel className='flex flex-col space-y-8  text-gray-800 dark:bg-gray-800 dark:text-gray-200'>
      <div className='flex flex-col space-y-4  text-gray-800 dark:bg-gray-800 dark:text-gray-200'>
        <label>Enter URL</label>
        <input value={url} onChange={handleUrlChange} type="text" className="py-1 my-3 bg-gray-50 border border-gray-300  dark:bg-gray-600"/>
        <div className="flex justify-center">
          <Button className="text-gray-800 dark:bg-gray-800 dark:text-gray-200" success rounded outline onClick={handleUrlSubmit} disabled={loading}>
          {buttonText}
          </Button>
        </div>
      </div>
      <div className='flex flex-col space-y-4 dark:text-gray-200'>
        <label>Search for products, brands and more</label>
        <input value={query} onChange={handleQueryChange} type="text" className="py-1 my-3 bg-gray-50 border border-gray-300 dark:bg-gray-600"/>
        <div className="flex justify-center  dark:bg-gray-800">
          <Button className="text-gray-800 dark:bg-gray-800 dark:text-gray-200" success rounded outline onClick={handleQuerySubmit} disabled={loading}>
          {buttonText}
          </Button>
        </div>
      </div>      
      <Panel className='flex text-gray-800 flex-col space-y-4 dark:bg-gray-800 dark:text-gray-200'>
        <label>Example URLs</label>
        <ul style={{listStyleType:"disc"}} className="flex flex-col space-y-2">
          <li className="flex flex-row space-x-4 items-start justify-start"><div>1. </div><Button success className="text-white active:bg-green-700" onClick={() =>  navigator.clipboard.writeText('https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.price_range.from%3D10000&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNob3AgTm93Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&otracker=clp_metro_expandable_3_7.metroExpandable.METRO_EXPANDABLE_Shop%2BNow_mobile-phones-store_O1WYX08RHODP_wp4&fm=neo%2Fmerchandising&iid=M_45097844-8fd6-4d1b-b414-faca5617af95_7.O1WYX08RHODP&ppt=hp&ppn=homepage&ssid=di5cfb5mls0000001688463812500&p%5B%5D=facets.price_range.to%3D20000&p%5B%5D=facets.brand%255B%255D%3DPOCO&page=')}>Copy</Button></li>
          <li className="flex flex-row space-x-4 items-start justify-start"><div>2. </div><Button success className="text-white active:bg-green-700" onClick={() =>  navigator.clipboard.writeText('Copy this text to clipboard')}>Copy</Button></li>
          <li className="flex flex-row space-x-4 items-start justify-start"><div>3. </div><Button success className="text-white active:bg-green-700" onClick={() =>  navigator.clipboard.writeText('Copy this text to clipboard')}>Copy</Button></li>
        </ul>
        <div className="font-bold">Important: Append "&page=" at the end of URL</div>
      </Panel>
      <div className=' flex flex-col space-y-4 text-gray-800 dark:bg-gray-800 dark:text-gray-200'>
        <label>Data selection</label>
        <Checkbox label="Product's Name" checked={isProductNameChecked} onChange={handleProductNameSelection} />
        <Checkbox label="Current Price" checked={isCurrentPriceChecked} onChange={handleCurrentPriceSelection} />
        <Checkbox label="Original Price" checked={isOriginalPriceChecked} onChange={handleOriginalPriceSelection} />
        <Checkbox label="Discount" checked={isDiscountChecked} onChange={handleDiscountSelection} />
        <Checkbox label="Rating" checked={isRatingChecked} onChange={handleRatingSelection} />
        <Checkbox label="F-assured" checked={isFassuredChecked} onChange={handleFassuredSelection} />
        <Checkbox label="Highlights" checked={isHighlightsChecked} onChange={handleHighlightsSelection} />
        <Checkbox label="Seller's Name" checked={isSellerChecked} onChange={handleSellerSelection} />
        <Checkbox label="Seller's Rating" checked={isSellerRatingChecked} onChange={handleSellerRatingSelection} />
        <Checkbox label="Description" checked={isDescriptionChecked} onChange={handleDescriptionSelection} />
        <Checkbox label="Stock Availability" checked={isStockChecked} onChange={handleStockSelection} />
        <Checkbox label="Image URL" checked={isImageUrlChecked} onChange={handleImageUrlSelection} />
        <Checkbox label="Product URL" checked={isProductUrlChecked} onChange={handleProductUrlSelection} />
      </div>
      <div className='text-gray-800 flex flex-col space-y-4 dark:bg-gray-800 dark:text-gray-200'>
        <label>Download Data</label>
        <div className="flex justify-start">
        <CsvDownloadButton 
          data={data}
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
        > Download in CSV</CsvDownloadButton>
        </div>
      </div>
      <div className='text-gray-800 flex flex-col space-y-4 dark:bg-gray-800 dark:text-gray-200'>
        <label>Preview Data</label>
        <SortableTable data={data} config={config} />
      </div>
      </Panel>
      <Footer/>
    </div>
  )
}

export default FlipkartScraperPage