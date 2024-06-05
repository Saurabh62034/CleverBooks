import React from 'react';
import { Link } from 'react-router-dom';
import {Footer} from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs'

const FooterCom = () => {
  return (
    <Footer container className='border border-4 border-teal-500 pt-4'>
    <div className='w-full max-w-7xl mx-auto'>
      <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
        <div className='p-3 ml-8'>
        <Link to="/" className=' font-bold dark:text-white'>
        Clever
            <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Books</span>
            
        </Link>
        </div>
      
        <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm-gap-6'>
          <div>
            <Footer.Title title='Explore' />
            <Footer.LinkGroup col>
              <Footer.Link href='#'
              target='_blank'
              rel='noopener noreferrer'>
                Product
              </Footer.Link>
              <Footer.Link href='#'
              target='_blank'
              rel='noopener noreferrer'>
                Pricing
              </Footer.Link>
              <Footer.Link href='#'
              target='_blank'
              rel='noopener noreferrer'>
                Customer Stories
              </Footer.Link>
              <Footer.Link href='#'
              target='_blank'
              rel='noopener noreferrer'>
                Pricing
              </Footer.Link>Career
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title='Learn' />
            <Footer.LinkGroup col>
              <Footer.Link href='#'
              target='_blank'
              rel='noopener noreferrer'>
                About us
              </Footer.Link>
              <Footer.Link href='#'
              target='_blank'
              rel='noopener noreferrer'>
                Blog
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title='Contact CleverBooks' />
            <Footer.LinkGroup col>
              <Footer.Link href='#'
              target='_blank'
              rel='noopener noreferrer'>
                Sales@cleverbooks.ai
              </Footer.Link>
              <Footer.Link href='#'
              target='_blank'
              rel='noopener noreferrer'>
                Registered Office:
                1507, Incubex, 11th cross road, 19th Main Road, Bengaluru, India. 560102
              </Footer.Link>
              <Footer.Link href='#'
              target='_blank'
              rel='noopener noreferrer'>
                Corporate Office:
291, All Time Space, 4th Floor,
15th A Cross, Sector - 6,
HSR Layout, Bengaluru,
India. 560102
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider />
      <div className='w-full sm:flex sm:item-center sm:justify-between'>
        <Footer.Copyright href='#' by='Cleverbooks' year={new Date().getFullYear()} />
      
      <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
        <Footer.Icon href='#' icon={BsFacebook} />
        <Footer.Icon href='#' icon={BsTwitter} />
        <Footer.Icon href='#' icon={BsInstagram} />
        <Footer.Icon href='#' icon={BsGithub} />
      </div>
      </div>
    </div>  
    </Footer>
  )
}

export default FooterCom;