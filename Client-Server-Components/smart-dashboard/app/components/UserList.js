
import SearchBar from "./SearchBar";

export default async function UserList(){
    const users=await fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json()) ;

    return(
        <div>
            <h2>User List (Server Components)</h2>

            <SearchBar users={users}/>
        </div>
    );
}


