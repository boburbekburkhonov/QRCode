import React, { useState, useEffect } from 'react';
import '../../index.css'

function index(props) {

  const[temp, setTemp] = useState('');
  const[word, setWord] = useState('');
  const[qrCode, setQrCode] = useState('');
  const[color, setColor] = useState('');

  useEffect(() => {
    setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${""}x${""}&bgcolor=${color}`)
  }, [word, color])

  function handle() {
    setWord(temp)
  }

  return (
    <div>
      <div className='inputSec'>
        <input type="text" placeholder='Enter text' onChange={(e) => setTemp(e.target.value)}/>
      </div>

      <div>
        <img src={qrCode} alt="qrCodeImg" />
      </div>

      <div>
        <button onClick={handle}>
          Generate
        </button>

        <a href={qrCode} download='QRCode'>
          <button type='button'>
            Download
          </button>
        </a>

        <input type="color" onChange={(e) => setColor(e.target.value.substring(1))} />
      </div>
    </div>
  );
}

export default index;