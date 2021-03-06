import React from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Content from "./components/Content";
import API from "./utils/API";

class App extends React.Component {
  state = {
    people: {},
    modPeople: {},
    searchTerm: "",
    sortBy: "",
    sortOrder: "asc",
    sortIcon: "fas fa-arrow-circle-down",
    loaded: false
  };

  componentDidMount() {
    API.search()
      .then(res => {
        this.setState({
          people: res.data.results,
          modPeople: res.data.results,
          loaded: true
        });
      })
      .catch(err => console.log(err));
  }

  handleInputChange = async e => {
    await this.setState({
      searchTerm: e.target.value
    });
    this.filterPeople();
  };

  filterPeople = () => {
    let filteredList = this.state.people.filter(employee => {
      let employeeName = `${employee.name.first.toLowerCase()} ${employee.name.last.toLowerCase()}`;
      return employeeName.includes(this.state.searchTerm.toLowerCase());
    });

    this.setState({
      modPeople: filteredList
    });
  };

  handleSort = e => {
    const sortBy = e.target.getAttribute("sortId");
    const sortIcon = e.target.getAttribute("sortIcon");

    let sortedList = this.state.modPeople.sort((a, b) => {
      switch (sortBy) {
        case "name":
          if (a.name.last === b.name.last) {
            return a.name.first > b.name.first ? 1 : -1;
          } else {
            return a.name.last > b.name.last ? 1 : -1;
          }
        case "date":
          return a.dob.date > b.dob.date ? 1 : -1;
        default:
          return a[sortBy] > b[sortBy] ? 1 : -1;
      }
    });

    if (sortBy !== this.state.sortBy) {
      this.setState({
        sortOrder: "asc",
        sortIcon: "fas fa-arrow-circle-down"
      });
    }

    if (sortIcon !== null) {
      switch (this.state.sortOrder) {
        case "asc":
          sortedList = this.state.modPeople.reverse();
          this.setState({
            sortOrder: "desc",
            sortIcon: "fas fa-arrow-circle-up"
          });
          break;
        default:
          this.setState({
            sortOrder: "asc",
            sortIcon: "fas fa-arrow-circle-down"
          });
      }
    }

    this.setState({
      modPeople: sortedList,
      sortBy: sortBy
    });
  };

  render() {
    return (
      <div className="container">
        <Nav />
        <Search
          handleInputChange={this.handleInputChange}
          searchTerm={this.state.searchTerm}
        />
        <Content
          people={this.state.modPeople}
          sortBy={this.state.sortBy}
          sortOrder={this.state.sortOrder}
          sortIcon={this.state.sortIcon}
          handleSort={this.handleSort}
          loaded={this.state.loaded}
        />
      </div>
    );
  }
}

export default App;