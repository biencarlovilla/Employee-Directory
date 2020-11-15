import React from "react";

function Header(props) {
  return (
    <tr>
      
      <th scope="col"></th>
      <th scope="col" className="sortBy" onClick={props.handleSort} sortId="name">
        <i className={props.sortBy === "name" ? props.sortIcon : props.sortIcon + " hidden"} sortId="name" sortIcon={props.sortOrder}></i>
        &nbsp;Name
      </th>

      <th scope="col" className="sortBy" onClick={props.handleSort} sortId="phone">
        <i className={props.sortBy === "phone" ? props.sortIcon : props.sortIcon + " hidden"} sortId="phone" sortIcon={props.sortOrder}></i>
        &nbsp;Phone
      </th>

      <th scope="col" className="sortBy" onClick={props.handleSort} sortId="email">
        <i className={props.sortBy === "email" ? props.sortIcon : props.sortIcon + " hidden"} sortId="email" sortIcon={props.sortOrder}></i>
        &nbsp;Email
      </th>
    
    </tr>
  );
}

export default Header;
