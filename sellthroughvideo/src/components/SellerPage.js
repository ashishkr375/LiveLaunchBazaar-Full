import React, { useState } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import './seller.css'; // Import your CSS file for styling

function randomID(len) {
  let result = '';
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(url = window.location.href) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

export default function App() {
  const roomID = getUrlParams().get('roomID') || randomID(5);
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [popupVisible, setPopupVisible] = useState(true);

  const handleProductSubmit = () => {
    // Store product details in variables
    console.log('Product Name:', productName);
    console.log('Product Description:', productDescription);
    setPopupVisible(false); // Close the popup after submission
  };

  const role_str = getUrlParams(window.location.href).get('role') || 'Host';
  const role =
    role_str === 'Host'
      ? ZegoUIKitPrebuilt.Host
      : role_str === 'Cohost'
      ? ZegoUIKitPrebuilt.Cohost
      : ZegoUIKitPrebuilt.Audience;

  let sharedLinks = [];
  if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
    sharedLinks.push({
      name: 'Join as co-host',
      url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}&role=Cohost`,
    });
  }
  sharedLinks.push({
    name: 'Join as audience',
    url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}&role=Audience`,
  });
  const AUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}&role=Audience`;
  const appID = 6111114;
  const serverSecret = 'xxxxxxxxxxx' //serverkey here';
  const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, randomID(5), randomID(5));

  let myMeeting = async (element) => {
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.LiveStreaming,
        config: {
          role,
        },
      },
      sharedLinks,
    });
  };

  return (
    <>
      
      {popupVisible && (
        <div className="popup">
          <div className="popup_inner">
            <h2>Enter Product Details</h2>
            <label>
              Product Name:
              <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
            </label>
            <label>
              Product Description:
              <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
            </label>
            <button onClick={handleProductSubmit}>Submit</button>
          </div>
        </div>
      )}
      <div className="myCallContainer" ref={myMeeting}></div>
    </>
  );
}
