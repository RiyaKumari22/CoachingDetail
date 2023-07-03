import React, { useState } from 'react';
import { IoMdArrowDropright, IoMdHome, IoMdLogOut, IoMdPerson } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Details from '../screen/details';
import Login from './Login';
import { useSelector } from 'react-redux';


export default function SidebarComponent() {
    const drawerOpen = useSelector(state => state.global.drawerOpen);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const onShowLoader = () => {
        setShowLoader(true);
        setTimeout(() => {
            setShowLoader(false);
        }, 5 * 1000)
    }
    return (
        <div className="sidebar" style={{ width: !drawerOpen ? 90 : 250 }}>
            <a className="sidebar__item">
                <IoMdHome className='sidebar__item-icon' />
                {
                    drawerOpen
                        ?
                        <Link to={'/home'} onClick={() => onShowLoader()} className="sidebar__item-txt">Home</Link>
                        :
                        null
                }
            </a>

            <a className="sidebar__item" onClick={() => { setIsDropdownOpen(!isDropdownOpen) }}>
                <IoMdPerson className='sidebar__item-icon' />
                {
                    drawerOpen
                        ?
                        <div>
                            <span className="sidebar__item-txt">My Detail</span>
                            <IoMdArrowDropright className='sidebar__item-icon' />
                        </div>
                        :
                        null
                }

            </a>
            <div className="sidebar__item-dropdown" style={{ display: isDropdownOpen ? "block" : "none" }}>
                <div className="sidebar__item-dropdown-item">
                    <IoMdArrowDropright className='sidebar__item-icon' />

                    <Link onClick={() => onShowLoader()} className="sidebar__item-dropdown-txt" to={'/details'}  >Current Details</Link>
                </div>
                <div className="sidebar__item-dropdown-item">
                    <IoMdArrowDropright className='sidebar__item-icon' />
                    <Link onClick={() => onShowLoader()} to={'/edit'} className="sidebar__item-dropdown-txt">Update Details</Link>
                </div>
            </div>
            <a className="sidebar__item">
                <IoMdLogOut className='sidebar__item-icon' />
                {
                    drawerOpen
                        ?
                        <Link onClick={() => onShowLoader()} className="sidebar__item-txt" to={'/Login'}>Logout</Link>
                        :
                        null
                }
            </a>
        </div>
    )
}