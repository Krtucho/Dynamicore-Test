import UserList from "@/components/section-one/user-list";
import UserType from "@/types/user-type";

const AssignOne = ({users}: {
    users: UserType[]
}) => {
    return (
        <div>
            <UserList users={users}></UserList>
        </div>
    )
}

export default AssignOne