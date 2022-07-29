import { useEffect,useState } from "react"
import img from "../public/image/pattern-bg.png"

const IpAddress = () => {
    const [IpAddressDist, setIpAddressDist] = useState({});
    const [httpError, setHttpError] = useState(null)
    useEffect(() =>{
        fetch("http://ip-api.com/json/").then((res) => {
                if(res.ok){
                    setHttpError(null)
                    return res.json()
                }else{
                    throw Error("Failed to fetch IP Address")
                }
        }).then((data) => {
            console.log(data)
            setIpAddressDist(data)
        }).catch((error) =>
        setHttpError("Failed To Retrieve IP Address, please try again later"))
    },[])

  return ( <div className="bg-gradient-to-r from-pink-500 to-violet-500">
    {!httpError && (
        <>
        <div className="h-screen w-screen  text-center w-full">
            <p className="text-xl md:text-2xl font-medium text-black-800">
                <span className="text-xl md:text-2xl font-medium text-gray-800">Public IPV4 Address: </span>
                {IpAddressDist.query}
            </p>
            <p className="text-xl md:text-2xl font-medium text-black-800" >
                <span className="text-xl md:text-2xl font-medium text-gray-800">internet service provider (ISP) : </span>
                {IpAddressDist.isp}
            </p>
            <p className="text-xl md:text-2xl font-medium text-black-800">
                <span className="text-xl md:text-2xl font-medium text-gray-800">Location: </span>
                {IpAddressDist.city}, {IpAddressDist.country}
            </p>
        </div>
        {/* <LocationMap lat={IpAddressDist.lat} lon={IpAddressDist.lon}/> */}
        </>
        
    )}
            {httpError && <p>{httpError}</p>}


    </div>
  );
};

export default IpAddress