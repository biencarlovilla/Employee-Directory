import React from "react";
import Header from "./Header";
import Employee from "./Employee";

function Content(props) {
  if (props.loaded) {
    const employeeList = props.people;

    return (
      <div>
        <table className="table">
            <Header
              sortBy={props.sortBy}
              sortOrder={props.sortOrder}
              sortIcon={props.sortIcon}
              handleSort={props.handleSort}
            />
          <tbody>
            {employeeList.map(people => (
              <Employee
                id={people.login.uuid}
                image={people.picture.thumbnail}
                name={people.name.first + " " + people.name.last}
                phone={people.phone}
                email={people.email}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return null;
  }
}

export default Content;