import { Navigate, Outlet} from "react-router";

const Protected = ({loggedIn}) => {
    if (!loggedIn){
        return <Navigate to ="/login" replace />;
    }

    return <Outlet/>;


}

export default Protected;
