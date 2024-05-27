import './assets/styles.scss';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer-container">
      <div className="footer">
        <span>
          Created with{' '}
          <a rel="noreferrer" target="_blank" href="https://react.dev/">
            React
          </a>
          ,{' '}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://redux-toolkit.js.org/"
          >
            Redux Toolkit
          </a>{' '}
          &{' '}
          <a rel="noreferrer" target="_blank" href="https://commercejs.com/">
            Commerce.js
          </a>
        </span>
        <a
          rel="noreferrer"
          className="github"
          target="_blank"
          href="https://github.com/lxndrbukin/unistore"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </footer>
  );
}
