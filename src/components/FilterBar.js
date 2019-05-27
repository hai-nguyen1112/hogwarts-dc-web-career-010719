import React from 'react'

const FilterBar = ({onFilter}) => {
  return (
    <div id="filterbarcontainer">
      Filter: &nbsp;
      <select name="filter" id="filter" onChange={event => onFilter(event)}>
        <option value="all">All</option>
        <option value="greased">Greased</option>
        <option value="non-greased">Non-Greased</option>
      </select>
    </div>
  )
}

export default FilterBar
