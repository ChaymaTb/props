import React from 'react'
import PropTypes from "prop-types";

export const Profile = ({fullName,bio,profession}) => {
return (
    <div className='Profile'>
        <h2 style={{color: "red"}}>FullName: {fullName}</h2>
        <h3 style={{backgroundColor: "red"}}>My bio: {bio}</h3>
        <h4>Profession: {profession}</h4>
    </div>
)
};

export const Image = (props) => {
return (
    <div className="image">
        {props.children}
    </div>
)
};

export const HandleMe = props => {
    return (
    <button onClick={() => props.alertMyInput(props.fullName)}>
        ClickMe
    </button>
    );
};

Profile.defaultProps = {
    fullName:"Chayma Taba",
    bio:"from Gabes",
    profession:"Web Developper"
};

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
};


