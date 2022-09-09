import Router from "next/router";

export const logOut = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/drivers/logout`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
    })

    await Router.push('/ride/login');
}
