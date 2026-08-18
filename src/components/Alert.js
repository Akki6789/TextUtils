import React from "react";

export default function Alert(props) {
  const capitalizeFirstCharacter = (word) => {
    if (!word) {
      return "";
    }

    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  };

  return (
    <div>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>
            {capitalizeFirstCharacter(props.alert.type)}
          </strong>
          : {props.alert.msg}
        </div>
      )}
    </div>
  );
}