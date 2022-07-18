import React from 'react'
import PropTypes from "prop-types";

export const Profile = ({fullName,bio,profession}) => {
return (
    <div className='Profile'>
        <h2>FullName: {fullName}</h2>
        <h3>My bio: {bio}</h3>
        <h4>Profession: {profession}</h4>
    </div>
)
};

export const Image = (props) => {
return (
    <div className="image">
        <img src="./photo/ch.jpg" alt="Chayma" />
        {props.children}
    </div>
)
};

export const HandleMe = props => {
    return (
    <button onClick={() => props.alertMyInput(`Chayma`)}>
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


