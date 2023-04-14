import { useEffect, useState } from "react"

const useAdmin = (email) => {
    const [admin, setAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if(email) {
            fetch(`https://last-assignment-serverside.vercel.app/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.isAdmin)
                setIsAdminLoading(false);
                // console.log(data);
            })
        }
    },[email])
    return [admin, isAdminLoading]
};
export default useAdmin;