import React from 'react'

const capitalize = (word) => {
  word = word.toLowerCase();
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {capitalize(props.alert.type)} : {props.alert.msg}
      {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}

export default alert