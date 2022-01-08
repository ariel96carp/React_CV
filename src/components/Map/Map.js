import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api"
import { useRef, useCallback, useState, useEffect } from "react"

const Map = () => {
    const googleApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    const latCoordinate = -34.71437824101841
    const lngCoordinate = -58.535330158467374
    const [ userMarker, setUserMarker ] = useState([])
    const mapRef = useRef()
    const onMapLoad = useCallback((map) => {
        mapRef.current = map
    }, [])
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserMarker(current => 
                    [
                        ...current,
                        {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    ])
            },
            () => null
        )

        return (() => {
            setUserMarker([])
        })
    }, [])

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: googleApiKey
    })

    if (loadError) return <p>El mapa no pudo cargarse.</p>
    if (!isLoaded) return <p>Cargando mapa...</p>

    return (
        <GoogleMap
        mapContainerStyle={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
        }}
        zoom={15}
        center={{
            lat: latCoordinate, 
            lng: lngCoordinate
        }}
        options={{
            disableDefaultUI: true,
            zoomControl: true
        }}
        onLoad={onMapLoad}>
            <Marker 
            position={{ 
                lat: latCoordinate,
                lng: lngCoordinate}} />
            {userMarker.length > 0 &&
                userMarker.map((marker, index) => 
                    <Marker
                    key={index + 1}
                    position={{
                        lat: marker.lat,
                        lng: marker.lng
                    }} />
                )
            }
        </GoogleMap>
    )
}

export default Map