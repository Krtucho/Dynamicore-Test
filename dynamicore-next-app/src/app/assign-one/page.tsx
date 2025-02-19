"use client";

import SectionOne from "@/views/AssignOne";
import UserType from "@/types/user-type";

export default function Home() {
    const testUsers: UserType[] = [
        {
            name: "Alex",
            age: 10    
        },
        {
            name: "Bobby",
            age: 12
        },
    ]

    return (
        <div>
            <SectionOne users={testUsers}></SectionOne>
        </div>
    )
}