import { FunctionComponent } from 'react'

const Footer: FunctionComponent = ({ children }) => (
  <footer className="footer">
    <div className="container">
      <nav className="level">
        <div className="level-left">
          <div className="level-item has-special-links">
            &copy; 2004-2021 <a href="https://tano.si"
              property="cc:attributionName" rel="cc:attributionURL">Tadej&nbsp;Novak</a>
          </div>
        </div>
        <div className="level-right">
          <div className="level-item has-special-links">
            {children}
          </div>
        </div>
      </nav>

    </div>
  </footer>
)

export default Footer;
