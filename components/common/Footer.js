import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='digitalab' className='logobg' />
              <br />
              <span>
                Dúvidas? Nos contate <br /> Segunda – Sexta de 8 às 18h
              </span>
              <br />
              <br />
              <h3>86 9 9991-0730</h3>
              <br />
              <button className='button-primary'>Request for quote</button>
            </div>
            <ul>
              <h3>AGÊNCIA</h3>
              <li>
                <Link href='/'>Sobre a agência</Link>
              </li>
              <li>
                <Link href='/'>Nosso time</Link>
              </li>
              <li>
                <Link href='/'>Mostruário</Link>
              </li>
              <li>
                <Link href='/'>Blog</Link>
              </li>
              <li>
                <Link href='/'>Contato</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVIÇOS</h3>
              <li>
                <Link href='/'>Web Design & Desenvolvimento</Link>
              </li>
              <li>
                <Link href='/'>Branding & Serviços criativos</Link>
              </li>
              <li>
                <Link href='/'>Marketing Digital</Link>
              </li>
              <li>
                <Link href='/'>E-Commerce</Link>
              </li>
            </ul>
            <ul>
              <h3>LINKS</h3>
              <div className='connect'>
                <li>
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2023 DIGITALAB.</span>
            </div>
            <div className='connect'>
              <span>Agência Digitalab</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMOS E CONDIÇÕES</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
