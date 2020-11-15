import React from "react";

function Employee(props) {
  return (
    <tr key={props.id}>
      <th scope="row">
        <img src={props.image} alt="Image" />
      </th>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
    </tr>
  );
}

export default Employee;