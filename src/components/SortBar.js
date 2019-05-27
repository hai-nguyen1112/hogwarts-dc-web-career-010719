import React from 'react'

const SortBar = ({onSort}) => {
  return (
    <div id="sortbarcontainer">
      <div id="sortbar" onChange={event => onSort(event)}>
        <div>
          <input type="radio" id="byweight" name="sort" value="byweight"/>
          <label for="byweight">&nbsp; Sort By Weight</label>
        </div>
        <div>
          <input type="radio" id="byname" name="sort" value="byname"/>
          <label for="byname">&nbsp; Sort By Name</label>
        </div>
        <div>
          <input type="radio" id="unsort" name="sort" value="unsort"/>
          <label for="unsort">&nbsp; Unsort</label>
        </div>
      </div>
    </div>
  )
}

export default SortBar
