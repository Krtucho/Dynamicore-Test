import React, { useEffect, useState } from 'react';
import UserType from "@/types/user-type";

const UserList = ({ users }: { users: UserType[] }) => {
    const [sortedUsers, setSortedUsers] = useState<UserType[]>([]);

    // Ordenar los usuarios alfabéticamente por nombre
    const sortUsers = () => users.sort((a, b) => a.name.localeCompare(b.name))
    // const { users } = useAppContext();

    // Ordenar usuarios cuando se monte el componente
    useEffect(() => {
        setSortedUsers(sortUsers());
    }, []);


    return (
        <div className="max-w-2xl mx-auto my-6">
            <ol className="space-y-2">
                {sortedUsers.map((user: UserType, index: number) => (
                    <li
                        key={index}
                        className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 
                              transition-colors duration-200 ease-in-out
                              border border-gray-200 shadow-sm"
                    >
                        <span className="text-gray-900 font-medium">
                            {user.name}
                        </span></li>
                ))}
            </ol>
        </div>
    )
}

export default UserList