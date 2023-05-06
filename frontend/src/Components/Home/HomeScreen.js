import React, { useEffect } from 'react'

export default function HomeScreen() {
    useEffect(() => {
        checkAuth()
    }, [])

    function checkAuth(){
        if(localStorage.getItem("generateToken")){

        }
        else{
            window.location.href = '/auth'
        }
    }
  return (
    <div>HomeScreen</div>
  )
}
