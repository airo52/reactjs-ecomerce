import React from 'react';

const NavTab = ({title,category,logo,active})=>{
    return <li key={title} className="nav-item">
    <a className={"nav-link "+active} data-toggle="tab" href={"#"+category}><img src={logo} alt="" />{title}</a>
    </li>
}

export default NavTab;