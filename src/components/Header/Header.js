import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className='header_container'>
            <div className='header_search_container'>
                <div className='search_form_wrapper'>
                    <form className='search_form'>
                        <div className='icon_container'>
                            <i className='fas fa-search search_icon'></i>
                            <i className="fa-solid fa-angle-down dropdown_icon"></i>
                        </div>
                        <input type='text' className='search_input_box' placeholder='LastName / FirstName' />
                        <i className="fa-solid fa-xmark cross_icon"></i>
                    </form>
                </div>
                <div className='search_buttons'>
                    <button>
                        <i className='fas fa-search' style={{ color: "white", paddingRight: "10px" }}></i>
                        Advanced Search</button>
                    <button><i class="fa-solid fa-plus" style={{ color: "white", paddingRight: "10px" }}></i>Patient</button>
                </div>
            </div>
            <div className='header_profile_container'>
                <div className='notification_container'>
                    <i className="fa-regular fa-bell bell_icon"></i>
                    <span className='notification_count'>3</span>
                </div>
                <i class="fa-solid fa-gear"></i>
                <i class="fa-regular fa-note-sticky"></i>
                <i class="fa-solid fa-bullhorn"></i>
                <div className='avatar_icon_container'>
                    <i class="fa-solid fa-user"></i>
                    <i className="fa-solid fa-angle-down"></i>
                </div>

            </div>
        </div>
    )
}

export default Header