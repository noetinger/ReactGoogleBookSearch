import React from 'react';
import './style.css';

function SearchForm(props) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label className="search-title" htmlFor="book-search">
                  Search for a Book Below:
                </label>
                <input type="text"
                       value={props.search}
                       onChange={props.handleInputChange}
                       className="form-control"
                       id="book-search"
                       placeholder="The Martian"/>
              </div>
              <button type="submit"
                      className="btn btn-outline-dark"
                      onClick={props.handleFormSubmit}>
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;