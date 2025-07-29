import React , {useEffect} from 'react'

//Reusable button component
const Button = ()=>{

    useEffect(()=>{
        console.log("button component mounted")
    },[])

    useEffect(()=>{
        return console.log("button component unmounted")
    },[])


    const handleClickEvent = () => {
        alert("The button has been clicked")
    }

    return(
        <button onClick={handleClickEvent}>Click me</button>
    )
}

export default Button