import React from 'react';

const MobileSocials = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40">
        <defs>
          <mask id="rounded-mask-inner">
            <rect x="50" y="17.2" width="10.6" height="10.6" rx="2" ry="2" fill="white" />
          </mask>
        </defs>
        <rect x="17" y="15" width="65" height="15" rx="6" ry="6" fill='rgba(0, 0, 0, 0.3)' />
        <a href="https://www.instagram.com/1simt2/" target="_blank" rel="noopener noreferrer">
          <image x="22" y="9" width="25" height="25" xlinkHref="/instagramIcon.png" />
        </a>

        <a href="https://www.linkedin.com/in/simonas-ta/" target="_blank" rel="noopener noreferrer">
          <image x="43" y="16" width="13.25" height="13.25" xlinkHref="/linkedInIcon.png" />
        </a>

        <a href="https://github.com/SimonasTamkevicius" target="_blank" rel="noopener noreferrer">
          <defs>
            <mask id="rounded-mask-outer">
              <rect x="59" y="17.2" width="10.6" height="10.6" rx="2" ry="2" fill="white" />
            </mask>
          </defs>
          <image
            x="59"
            y="17.2"
            width="10.75"
            height="10.75"
            xlinkHref="/githubIcon.png"
            mask="url(#rounded-mask-outer)"
          />
        </a>
      </svg>
    </div>
  );
};

export default MobileSocials;
