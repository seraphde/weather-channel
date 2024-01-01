import React from "react"

function TopButtons() {
    const cities = [
        {
            id:1,
            title: "addis abeba"
        },
        {
            id:2,
            title: "adama"
        },
        {
            id:3,
            title: "bahirdar"
        },
        {
            id:4,
            title: "jima"
        },
    ]
    return (
     <div className="flex items-center justify-around my-6">
        {cities.map((city) => (
            <button key={city.id} className="text-white text-lg form-medium" >

                {city.title} 
            </button>
        ))}

     </div>
  )
}

export default TopButtons