import React, { useState, useEffect } from 'react';
import { IoIosWifi } from "react-icons/io";
import { IoCellular } from "react-icons/io5";
import { IoBatteryFullOutline } from "react-icons/io5";

const iPhone = ({messageSent}) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
  return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 145" width="100%" height="600">
          <defs>
              <pattern
                  id="imagePattern"
                  x="0"
                  y="0"
                  patternUnits="userSpaceOnUse"
                  height="140"
                  width="80"
              >
                  <image
                  x="0"
                  y="0"
                  width="80"
                  height="150"
                  href="/iphoneBackground.png"
                  opacity="60%"
                  />
              </pattern>
              <pattern
                id="circleImagePattern"
                x="0"
                y="0"
                patternUnits="userSpaceOnUse"
                height="23"
                width="12"
              >
                <image
                  x="0"
                  y="0"
                  width="15"
                  height="10"
                  href="/simonasAboutImageNoBackground.png"
                />
              </pattern>
              <mask id="rounded-mask">
                <rect x="52.75" y="124.2" width="10.6" height="10.6" rx="2" ry="2" fill="white" />
              </mask>
              <filter id="blurFilter" x="0" y="0" width="100%" height="100%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.25" />
              </filter>
          </defs>
        {/* top volume button */}
        <rect x="9" y="35" width="1" height="8" rx="1" ry="1" fill='#000' stroke="#000" />
        {/* bottom volume button */}
        <rect x="9" y="47" width="1" height="8" rx="1" ry="1" fill='#000' stroke="#000" />
        {/* power button */}
        <rect x="75" y="45" width="1" height="14" rx="1" ry="1" fill='#000' stroke="#000" />
        <rect x="10" y="10" width="65" height="130" rx="8" ry="8" fill="url(#imagePattern)" />
        {/* phone outline */}
        <rect x="10" y="10" width="65" height="130" rx="8" ry="8" fill='rgba(255, 255, 255, 0)' stroke="#000" />
        {/* notch */}
        <rect x="34.5" y="13" width="15" height="4" rx="2" ry="2" fill='#000' stroke="#000" />
        {/* camera */}
        <circle cx="47.5" cy="15" r="1.75" fill='#222222' />
        <circle cx="47.5" cy="15" r="0.7" fill='#333333' />
        {/* dock app area */}
        <rect x="13.5" y="122" width="58" height="15" rx="6" ry="6" fill='rgba(0, 0, 0, 0.3)' />
        {/* time */}
        <text x="19" y="16" fontSize="3" fill="#FFF">
          {time.getHours() > 12 ? time.getHours() - 12 : time.getHours()}:{(time.getMinutes() < 10 ? '0' : '') + time.getMinutes()}
        </text>
        {/* notch icons */}
        <foreignObject x="54" y="13" width="20" height="20" fontSize="4">
          <IoCellular className='text-white' />
        </foreignObject>
        <foreignObject x="59" y="13" width="20" height="20" fontSize="4">
          <IoIosWifi className='text-white' />
        </foreignObject>
        <foreignObject x="64" y="13" width="20" height="20" fontSize="4">
          <IoBatteryFullOutline className='text-white' />
        </foreignObject>
        {/* message notification */}
        {!messageSent ? (
          <>
            <g className="message-notification-default">
              <rect x="13.7" y="21" rx="3" ry="3" width="58" height="12" fill="rgba(0, 0, 0, 0.6)" filter="url(#blurFilter)" />
              <circle cx="20" cy="27" r="4.5" fill="url(#circleImagePattern)" />
              <image x="21.25" y="28.8" width="3" height="3" xlinkHref="/messagesIcon.png" />
              <text x="26" y="26" fontSize="3" fontStyle="extra-bold" fill="#FFF">simonas tamkevicius</text>
              <text x="26" y="30" fontSize="2.5" fontStyle="extra-bold" fill="#FFF">check out my socials below!</text>
              <text x="64" y="25.75" fontSize="2.5" fontStyle="extra-bold" fill="#FFF" opacity="75%">now</text>
            </g>
            <g className="message-dissapear">
              <rect x="13.7" y="21" rx="3" ry="3" width="58" height="12" fill="rgba(0, 0, 0, 0.6)" filter="url(#blurFilter)" />
              <circle cx="20" cy="27" r="4.5" fill="url(#circleImagePattern)" />
              <image x="21.25" y="28.8" width="3" height="3" xlinkHref="/messagesIcon.png" />
              <text x="26" y="26" fontSize="3" fontStyle="extra-bold" fill="#FFF">simonas tamkevicius</text>
              <text x="26" y="30" fontSize="2.5" fontStyle="extra-bold" fill="#FFF">recieved your message!</text>
              <text x="64" y="25.75" fontSize="2.5" fontStyle="extra-bold" fill="#FFF" opacity="75%">now</text>
            </g>
          </>
        ) : (
          <>          
            <g className="message-dissapear">
              <rect x="13.7" y="21" rx="3" ry="3" width="58" height="12" fill="rgba(0, 0, 0, 0.6)" filter="url(#blurFilter)" />
              <circle cx="20" cy="27" r="4.5" fill="url(#circleImagePattern)" />
              <image x="21.25" y="28.8" width="3" height="3" xlinkHref="/messagesIcon.png" />
              <text x="26" y="26" fontSize="3" fontStyle="extra-bold" fill="#FFF">simonas tamkevicius</text>
              <text x="26" y="30" fontSize="2.5" fontStyle="extra-bold" fill="#FFF">check out my socials below!</text>
              <text x="64" y="25.75" fontSize="2.5" fontStyle="extra-bold" fill="#FFF" opacity="75%">now</text>
            </g>
            <g className="message-notification-sent">
              <rect x="13.7" y="21" rx="3" ry="3" width="58" height="12" fill="rgba(0, 0, 0, 0.6)" filter="url(#blurFilter)" />
              <circle cx="20" cy="27" r="4.5" fill="url(#circleImagePattern)" />
              <image x="21.25" y="28.8" width="3" height="3" xlinkHref="/messagesIcon.png" />
              <text x="26" y="26" fontSize="3" fontStyle="extra-bold" fill="#FFF">simonas tamkevicius</text>
              <text x="26" y="30" fontSize="2.5" fontStyle="extra-bold" fill="#FFF">recieved your message!</text>
              <text x="64" y="25.75" fontSize="2.5" fontStyle="extra-bold" fill="#FFF" opacity="75%">now</text>
            </g>
          </>
        )}
        {/* <g className="message-notification">
          <rect x="13.7" y="21" rx="3" ry="3" width="58" height="12" fill="rgba(0, 0, 0, 0.5)" filter="url(#blurFilter)" />
          <circle cx="20" cy="27" r="4.5" fill="url(#circleImagePattern)" />
          <image x="21.25" y="28.8" width="3" height="3" xlinkHref="/messagesIcon.png" />
          <text x="26" y="26" fontSize="3" fontStyle="extra-bold" fill="#FFF">simonas tamkevicius</text>
          <text x="26" y="30" fontSize="2.5" fontStyle="extra-bold" fill="#FFF">check out my socials below!</text>
          <text x="64" y="25.75" fontSize="2.5" fontStyle="extra-bold" fill="#FFF" opacity="75%">now</text>
        </g> */}
        {/* apps */}
        <a href="https://www.instagram.com/1simt2/" target="_blank" rel="noopener noreferrer">
          <image x="15" y="116" width="25" height="25" xlinkHref="/instagramIcon.png" />
        </a>

        <a href="https://www.linkedin.com/in/simonas-ta/" target="_blank" rel="noopener noreferrer">
          <image x="36" y="123" width="13.25" height="13.25" xlinkHref="/linkedInIcon.png" />
        </a>

        <a href="https://github.com/SimonasTamkevicius" target="_blank" rel="noopener noreferrer">
          <defs>
            <mask id="rounded-mask">
              <rect x="52.75" y="124.2" width="10.6" height="10.6" rx="2" ry="2" fill="white" />
            </mask>
          </defs>
          <image x="52.75" y="124.2" width="10.75" height="10.75" xlinkHref="/githubIcon.png" mask="url(#rounded-mask)" />
        </a>
      </svg>
  )
}

export default iPhone