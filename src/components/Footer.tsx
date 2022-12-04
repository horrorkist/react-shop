import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled.footer`
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.baseLight};
  color: ${(props) => props.theme.text};

  .footer-inner {
    max-width: 1360px;
    width: 100%;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    color: ${(props) => props.theme.text};
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-decoration: none;
  }

  .zerobase:hover {
    text-decoration: underline;
  }

  .footer-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    > li {
      margin: 20px 0;
    }
  }

  .logo-list {
    display: flex;
    width: 300px;
    justify-content: space-between;
    li {
      margin: 0 5px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .social {
    display: flex;

    li {
      padding: 0 10px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .pagename {
        position: absolute;
        width: min-content;
        top: -33px;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${(props) => props.theme.baseDark};
        color: ${(props) => (props.theme.isDark ? props.theme.text : "white")};
        padding: 5px 10px;
        border-radius: 5px;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;

        &::before {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border: 5px solid transparent;
          border-top-color: ${(props) => props.theme.baseDark};
        }
      }

      &:hover .pagename {
        opacity: 1;
        animation: opacity 0.3s ease-in-out;
      }
    }
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <div className="footer-inner">
        <ul className="footer-list">
          <li>
            <a
              className="zerobase"
              href="https://zero-base.co.kr"
              target="_blank"
              rel="noopener norefferer"
            >
              제로베이스
            </a>
          </li>
          <li>
            <ul className="logo-list">
              <li>
                <img src="/Visa.svg" title="Visa" alt="Visa" />
              </li>
              <li>
                <img
                  src="/Mastercard.svg"
                  title="Mastercard"
                  alt="Mastercard"
                />
              </li>
              <li>
                <img
                  src="/American_Express.svg"
                  title="American Express"
                  alt="American Express"
                />
              </li>
              <li>
                <img src="/Paypal.svg" title="Paypal" alt="Paypal" />
              </li>
              <li>
                <img
                  src="/Diners_Club.svg"
                  title="Diners Club"
                  alt="Diners Club"
                />
              </li>
              <li>
                <img src="/Discover.svg" title="Discover" alt="Discover" />
              </li>
            </ul>
          </li>
          <li>
            <ul className="social">
              <li>
                <a
                  href="https://zero-base.co.kr"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  <FontAwesomeIcon icon={faFacebookF} size="xl" />
                  <span className="pagename">facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://zero-base.co.kr"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="xl" />
                  <span className="pagename">instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://zero-base.co.kr"
                  target="_blank"
                  rel="noopener norefferer"
                >
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                  <span className="pagename">github</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <span>Copyright © 2022 Zero Base</span>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}
