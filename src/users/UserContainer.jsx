import { UserBody } from "./UserBody";
import { UserHeader } from "./UserHeader";


export const UsersContainer = (props) => {
    // console.log(props);
    const{users} = props; //const users = props.users;
    return (
        <div className="container"> 
            <UserHeader/>
            <UserBody users={users} removeUser={props.removeUser}/>
        </div>
    )
}