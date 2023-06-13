import { useContext, useState, useEffect } from "react";
import axios from "axios";

import { AuthContext } from "../context/auth";

export const Profile = () => {
 const { user } = useContext(AuthContext);
 const [userProfile, setUserProfile] = useState({});

 useEffect(() => {
   const getUserProfile = async () => {
     try {
       const { data } = await axios.get(
         `http://localhost:5010/user/${user.id}`
       );
       setUserProfile(data);
     } catch (error) {
       console.error(error);
     }
   };
   getUserProfile();
 }, [user]);

 const { _id: id, fullName, email } = userProfile;

 return (
   <>
     <h1>Your Profile</h1>
     <small>Your id: {id}</small>
     <p>
       <strong>Your First Last Names:</strong> {fullName}
     </p>
     <p>
       <strong>Your email:</strong> {email}
     </p>
   </>
 );
};
