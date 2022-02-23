import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api"
import { useRef, useCallback, useState, useEffect } from "react"
import { FormattedMessage } from "react-intl"

const Map = () => {
    const googleApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    const latCoordinate = -34.71437824101841
    const lngCoordinate = -58.535330158467374
    const myCoordinates = {
        lat: latCoordinate,
        lng: lngCoordinate
    }
    const [ coordinates, setCoordinates ] = useState([myCoordinates])
    const [ userLocation, setUserLocation ] = useState(false)
    const mapRef = useRef()
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCoordinates(current => 
                    [
                        ...current,
                        {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    ])
                setUserLocation(true)
            },
            () => setUserLocation(true)
        )
    }, [])

    const onMapLoad = useCallback(map => {
        const bounds = new window.google.maps.LatLngBounds()
        coordinates.forEach(coordinate => {
            bounds.extend(
                new window.google.maps.LatLng(
                    coordinate.lat,
                    coordinate.lng
                )
            )
        })
        mapRef.current = map
        map.fitBounds(bounds)
    }, [ coordinates ])

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: googleApiKey
    })

    if (loadError) return <p className="map-status">El mapa no pudo cargarse.</p>
    if (!isLoaded || !userLocation )
    {
        return (
            <p className="map-status loading">
                <FormattedMessage
                    id="map-status.loading"
                />
            </p>
        )
    }
        
    return (
        <div className="map-container">
            <GoogleMap
                mapContainerStyle={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }} 
                options={{
                    disableDefaultUI: true,
                    zoomControl: true
                }}
                onLoad={onMapLoad}>
                    {coordinates.map((marker, index) => 
                        <Marker
                        key={index + 1}
                        position={{
                            lat: marker.lat,
                            lng: marker.lng
                        }} />
                )}
            </GoogleMap>
        </div>
    )
}

export default Map