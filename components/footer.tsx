import { FaLinkedinIn, FaTwitter, FaGithub, FaLink } from 'react-icons/fa';

import { Container } from './common/container';

const Footer = () => {
  return (
    <footer className="pb-4">
      <Container>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © 2022{' '}
            <a href="https://aleromano.com" target="_blank" className="hover:underline">
              Alessandro Romano
            </a>{' '}
            All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 justify-center">
            <a
              href="https://twitter.com/_aleromano"
              className="text-gray-500 hover:text-gray-900 hover:text-foreground"
            >
              <FaTwitter />
            </a>
            <a href="https://github.dev/Axel92Dev" className="text-gray-500 hover:text-foreground">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/alessandroromano92/" className="text-gray-500 hover:text-foreground">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
