import { Icon } from "@iconify/react";
import { useState, useEffect } from "react"

const _user = {
    name: "Ana Alface",
    username: "anaalface",
    email: "ana@ana.com",
    urlPhoto: "https://picsum.photos/200/300"
}

export default function FakeUser() {
    const [ user, setUser ] = useState(_user)

    return (
        <>
            <div className="flex items-center justify-between gap-1 bg-gray-200 my-1 p-2 rounded">
                <div className="flex items-center gap-2">
                    <div>
                        <img src={user.urlPhoto} alt="" className="w-16 h-16 rounded-lg" />
                    </div>
                    <div className="leading-5">
                        <div className="font-semibold">
                            {user.name}
                        </div>
                        <div>
                            @{user.username}
                        </div>
                        <div className="text-gray-500">
                            {user.email}
                        </div>
                    </div>
                </div>
                <div className="bg-gray-400 p-1 rounded-lg flex items-center cursor-pointer hover:bg-gray-500">
                    <Icon icon="mdi-refresh" className="text-black text-3xl"/>
                </div>
            </div>
        </>
    )
}