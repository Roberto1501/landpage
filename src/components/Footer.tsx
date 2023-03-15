/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';


const Footer: React.FC = () => {
  const Foot = styled.div`
    height: 150px;
    color: #fff;

    .container {
      display: flex;
      margin-left: 15px;
      margin-top: 50px;
      font-size: 20px;
      margin-right: 15px;
    }

    p {
      margin-left: 25px;
      cursor: pointer;
    }

    .container-maior {
      display: flex;
      justify-content: space-between;
    }

    .direitos {
      margin-left: 40px;
      margin-top: 10px;
    }
  `;
  return (
    <React.Fragment>
      <Foot>
        <div className="container-maior">
          <div className="container">
            <p>Sobre</p>

            <p>Contato</p>

            <p>Termos de uso</p>
            <p>Privacidade</p>
          </div>

          <div className="container">
            <p>
              <BsFacebook />
            </p>
            <p>
              <BsTwitter />
            </p>
            <p>
              <BsInstagram />
            </p>
          </div>
        </div>

        <div className="direitos">Copyright &copy; 2023 Todos os direitos reservados</div>
      </Foot>
    </React.Fragment>
  );
};

export default Footer;
