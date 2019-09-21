import React, { Component, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import SearchResults from "./SearchResults";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

class Search extends Component {
  state = {
    links: null,
    loading: false,
    dataLoaded: false,
    value: ""
  };

  handleSearchClicked = async keyword => {
    this.setState({ loading: true });
    const res = await axios.get(
      `http://back-end-dev.us-west-1.elasticbeanstalk.com/keyword?key=${keyword}`
    );
    const links = await res.data.links[0];
    const cnnLinks = links.CNN;
    this.setState({ links: cnnLinks, loading: false, dataLoaded: true });
  };

  onChangeHandler = async e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <section className="container">
          <Typography
            variant="h1"
            style={{ fontFamily: "Open Sans Condensed , sans-serif" }}
          >
            Explore
          </Typography>
          <div style={{ minWidth: "70%", display: "flex" }}>
            <TextField
              id="outlined-search"
              label="Search for News"
              type="search"
              value={this.state.value}
              onChange={e => this.onChangeHandler(e)}
              margin="normal"
              variant="outlined"
              fullWidth
            />
            <IconButton onClick={this.handleSearchClicked}>
              <SearchIcon />
            </IconButton>
          </div>
          <div style={{ textAlign: "center", margin: "2%" }}>
            {this.state.loading && <CircularProgress color="primary" />}
            {this.state.dataLoaded && <SearchResults data={this.state.links} />}
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Search;
