import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import React, { useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai';
import { useState } from 'react';
import {FaMoon, FaSun} from 'react-icons/fa';
import {useSelector, useDispatch} from 'react-redux';
import { toggleTheme } from '../redux/theme/ThemeSlice';
import { signoutSuccess } from '../redux/user/userSlice';



const Header = () => {

    const dispatch = useDispatch();

  
    const {currentUser} = useSelector(state => state.user);
    const {theme} = useSelector(state =>state.theme)
    const navigate = useNavigate();


    const handleSignout = async ()=>{
        try{
          const res = await fetch('/api/user/signout',{
            method: "POST",
          });
          const data = await res.json();
          if(!res.ok){
            console.log(data.message);
          }
          else{
            dispatch(signoutSuccess());
            navigate('/sign-in')
          }
        }catch(e){
          console.log(e);
        }
        
      }

  return (
    <Navbar className='sticky top-0 w-full min-w-100 border-b-2 z-50 min-h-12 bg-gray-200'>
        <Link to="/" className='self-center whitespace-nowrap text-md sm:text-xl font-semibold dark:text-white'>
        Clever
            <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Books</span>
            
        </Link>
  
        <div className='flex gap-2 md:order-2'>
            <Button className='w-12 h-10 sm:block' color='gray' onClick={()=>dispatch(toggleTheme())}>
                {theme==='light'? <FaMoon />: <FaSun />}
            </Button>
            {currentUser?(
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar 
                            alt='user'
                            img={currentUser.profilePic}
                            rounded
                        />
                    }
                >
                    <Dropdown.Header>
                        <span className='block text-sm'>@{currentUser.username}</span>
                        <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
                    </Dropdown.Header>
                    <Link to='/dashboard?tab=profile'>
                        <Dropdown.Item>Profile</Dropdown.Item>
                    </Link>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
                </Dropdown> 
            ):(
                <Link to="/sign-in">
                <Button className='max-[360px]:h-10 max-[360px]:w-10'
                 outline
                gradientDuoTone='purpleToBlue'>
                    Sign In
                </Button>
            </Link>
            )

            }
            
            <Navbar.Toggle></Navbar.Toggle>
        </div>
            <Navbar.Collapse>
                <Navbar.Link href="/">Home</Navbar.Link>
                <Navbar.Link href="/About">About</Navbar.Link>
                <Navbar.Link href="/Project">Project</Navbar.Link>
            </Navbar.Collapse>
    </Navbar>
  )
}

export default Header