import React from 'react';
import './styles/app.css';

interface SocialLinkInfo {
  url: string;
  image: string;
  name: string;
}

function App() {
  const renderSocialLink = ({ url, image, name }: SocialLinkInfo) => {
    return (
      <li className="p-6">
        <a
          className="flex flex-row"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="max-w-[2rem] mr-2"
            src={`/social/${image}.svg`}
            alt={name}
          />
          {name}
        </a>
      </li>
    );
  };

  const socialLinks: SocialLinkInfo[] = [
    {
      url: 'https://github.com/jesatrix',
      image: 'github',
      name: 'GitHub'
    },
    {
      url: 'https://www.linkedin.com/in/jessicadelgado/',
      image: 'linkedin',
      name: 'LinkedIn'
    },
    {
      url: 'https://twitter.com/jesatrix',
      image: 'twitter',
      name: 'Twitter'
    }
  ];

  return (
    <div className="">
      <header className="app-header">
        <h1>
          <span>🧑🏽‍💻</span> Jess Delgado Perez
        </h1>
      </header>
      <main className="flex flex-col justify-center items-center">
        <ul className="flex flex-col max-w-md justify-around text-2xl">
          {socialLinks.map((link) => renderSocialLink(link))}
        </ul>
      </main>
    </div>
  );
}

export default App;
