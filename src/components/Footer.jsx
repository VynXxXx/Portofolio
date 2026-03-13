import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#E62727] text-white">
      {/* Wrapper dengan padding vertikal */}
      <div className="flex items-center justify-center py-4">
        
        <div className="flex items-center justify-center gap-x-4 sm:gap-x-8 lg:gap-x-12">
          <a 
            href="https://www.linkedin.com/in/kevin-benedict-947806318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            aria-label="Find us on LinkedIn" 
            target="_blank" 
            rel="noopener"
          >
            <svg
              className="h-8 w-8 sm:h-10 sm:w-10 text-white transition-colors duration-200 hover:text-gray-300"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
            
              <path
                d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                fill="currentColor"
              />
            </svg>
          </a>

          <a 
            href="https://github.com/USERNAME_ANDA" 
            aria-label="Find us on Github" 
            target="_blank" 
            rel="noopener"
          >
            <svg
              className="h-8 w-8 sm:h-10 sm:w-10 text-white transition-colors duration-200 hover:text-gray-300"
              viewBox="0 0 48 48" 
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M24 0C10.744 0 0 10.744 0 24c0 10.616 6.894 18.968 16.41 21.848.72.19.99-.49.99-.86 0-.41-.01-1.66-.02-3.13-5.01.99-6.08-2.3-6.08-2.3-.85-2.14-2.06-2.7-2.06-2.7-1.76-1.2.1-1.16.1-1.16 1.95.16 2.97 2.36 2.97 2.36 1.73 2.97 4.56 2.1 5.61 1.62.18-.88.49-1.39.88-1.7-4.29-.49-8.81-2.65-8.81-11.4 0-2.39.88-4.34 2.33-5.87-.24-.59-1.05-2.42.2-6.1 0 0 1.63-.52 6.64 2.25 1.57-.42 3.25-.63 4.93-.63 1.68 0 3.36.21 4.93.63 5.01-2.77 6.64-2.25 6.64-2.25 1.25 3.68.83 5.51.6 6.1 1.45 1.53 2.33 3.48 2.33 5.87 0 9.27-4.52 10.9-8.82 11.4.67.57 1.34 1.71 1.34 3.44 0 2.5-.02 4.75-.02 5.4 0 .37.26.85.99.66C41.106 42.968 48 35.616 48 24 48 10.744 37.256 0 24 0z"
                fill="currentColor"
              />
            </svg>
          </a>
          
          {/* Instagram */}
          <a href="https://www.instagram.com/_vynnnvinnn?igsh=dHBsdm91MTNoYWxp" aria-label="Find us on Instagram" target="_blank" rel="noopener">
            <svg
              className="h-8 w-8 sm:h-10 sm:w-10 text-white transition-colors duration-200 hover:text-gray-300"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 4.32c6.41 0 7.17.03 9.7.14 2.34.1 3.6.5 4.45.83 1.11.43 1.92.95 2.75 1.79a7.38 7.38 0 0 1 1.8 2.75c.32.85.72 2.12.82 4.46.11 2.53.14 3.29.14 9.7 0 6.4-.03 7.16-.14 9.68-.1 2.35-.5 3.61-.83 4.46a7.42 7.42 0 0 1-1.79 2.75 7.38 7.38 0 0 1-2.75 1.8c-.85.32-2.12.72-4.46.82-2.53.11-3.29.14-9.69.14-6.41 0-7.17-.03-9.7-.14-2.34-.1-3.6-.5-4.45-.83a7.42 7.42 0 0 1-2.75-1.79 7.38 7.38 0 0 1-1.8-2.75 13.2 13.2 0 0 1-.82-4.46c-.11-2.53-.14-3.29-.14-9.69 0-6.41.03-7.17.14-9.7.1-2.34.5-3.6.83-4.45A7.42 7.42 0 0 1 7.1 7.08a7.38 7.38 0 0 1 2.75-1.8 13.2 13.2 0 0 1 4.46-.82c2.52-.11 3.28-.14 9.69-.14ZM24 0c-6.52 0-7.33.03-9.9.14-2.54.11-4.3.53-5.81 1.12a11.71 11.71 0 0 0-4.26 2.77 11.76 11.76 0 0 0-2.77 4.25C.66 9.8.26 11.55.14 14.1A176.6 176.6 0 0 0 0 24c0 6.52.03 7.33.14 9.9.11 2.54.53 4.3 1.12 5.81a11.71 11.71 0 0 0 2.77 4.26 11.73 11.73 0 0 0 4.25 2.76c1.53.6 3.27 1 5.82 1.12 2.56.11 3.38.14 9.9.14 6.5 0 7.32-.03 9.88-.14 2.55-.11 4.3-.52 5.82-1.12 1.58-.6 2.92-1.43 4.25-2.76a11.73 11.73 0 0 0 2.77-4.25c.59-1.53 1-3.27 1.11-5.82.11-2.56.14-3.38.14-9.9 0-6.5-.03-7.32-.14-9.88-.11-2.55-.52-4.3-1.11-5.82-.6-1.6-1.41-2.94-2.75-4.27a11.73 11.73 0 0 0-4.25-2.76C38.2.67 36.45.27 33.9.15 31.33.03 30.52 0 24 0Z"
                fill="currentColor"
              />
              <path
                d="M24 11.67a12.33 12.33 0 1 0 0 24.66 12.33 12.33 0 0 0 0-24.66ZM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM39.7 11.18a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.75 0Z"
                fill="currentColor"
              />
            </svg>
          </a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
