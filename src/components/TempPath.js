import React, { useState, useEffect } from 'react'
const TempPath = () => {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Nagpur")




    useEffect(() => {
        const fetchAPI = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=8eacc428fb0b65ac38ef892cef08e388`
            const res = await fetch(url)
            const data = await res.json()
            console.log(data);
            setCity(data.main)
        }
        fetchAPI()
    }, [search])

    return (
        <>

            <div className="box">
                <div className="inputData">
                    <input type="search"
                        className='inputField'
                        defaultValue={search}
                        onChange={(e) => { setSearch(e.target.value) }}
                    />
                </div>
                {!city ? (
                    <p>No Data Found</p>
                ) : (
                    <><div className="container-fluid px-1 px-sm-3 py-5 mx-auto">
                        <div className="main">

                            <div className="row justify-content-center">
                                <div className="row card0">
                                    <div className="card1 col-lg-8 col-md-7">
                                        <h1>{search}</h1>
                                        <div className="text-center">
                                            <img className="image mt-5" src="https://i.imgur.com/M8VyA2h.png" />
                                        </div>
                                        <div className="row px-3 mt-3 mb-3">
                                            <h1 className="large-font mr-3">{city.temp}&#176;</h1>
                                            <div className="d-flex flex-column mr-3">
                                                {/* <h2 className="mt-3 mb-0">{search}</h2> */}
                                            </div>
                                            <div className="d-flex flex-column text-center">
                                                <h3 className="fa fa-sun-o mt-4"></h3>
                                                {/* <small>{city?.weather?.main}</small> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card2 col-lg-4 col-md-5">
                                        <div className="line my-5"></div>

                                        <p className='p'>Weather Details</p>
                                        <div className="row px-3">
                                            <p className="light-text">Feels-like</p>
                                            <p className="ml-auto">{city.feels_like}%</p>
                                        </div>
                                        <div className="row px-3">
                                            <p className="light-text">Humidity</p>
                                            <p className="ml-auto">{city.humidity}%</p>
                                        </div>
                                        <div className="row px-3">
                                            <p className="light-text">Pressure</p>
                                            <p className="ml-auto">{city.pressure}</p>
                                        </div>
                                        <div className="row px-3">
                                            <p className="light-text">Temp Min</p>
                                            <p className="ml-auto">{city.temp_min}</p>
                                        </div>
                                        <div className="row px-3">
                                            <p className="light-text">Temp Max</p>
                                            <p className="ml-auto">{city.temp_max}</p>
                                        </div>

                                        <div className="line mt-3"></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>

                )}
            </div>
        </>
    )
}

export default TempPath


