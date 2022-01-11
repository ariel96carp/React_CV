import { useLoadScript, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api"
import { useRef, useCallback, useState, useEffect } from "react"

const Map = () => {
    const googleApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    const latCoordinate = -34.71437824101841
    const lngCoordinate = -58.535330158467374
    const google = window.google
    const myCoordinates = {
        id: 1,
        lat: latCoordinate,
        lng: lngCoordinate
    }
    const [ coordinates, setCoordinates ] = useState([myCoordinates])
    const [ markerSelected, setMarkerSelected ] = useState(null)
    const mapRef = useRef()
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setCoordinates(current => 
                    [
                        ...current,
                        {
                            id: 2,
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    ])
            },
            () => null
        )
    }, [])

    const onMapLoad = useCallback((map) => {
        const bounds = new google.maps.LatLngBounds()
        coordinates.forEach(coordinate => {
            bounds.extend(
                new google.maps.LatLng(
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
                }} 
                onClick={() => {
                    setMarkerSelected(marker)
                }} />
            )}
            {markerSelected &&
                <InfoWindow
                position={{
                    lat: markerSelected.lat,
                    lng: markerSelected.lng
                }}
                onCloseClick={() => {
                    setMarkerSelected(null)
                }}>
                    <div className="google-info">
                        {markerSelected.id === 1
                            ? (
                                <h3>¡Mi ubicación!</h3>
                            )
                            : (
                                <h3>¡Tu ubicación!</h3>
                            )
                        }
                    </div>
                </InfoWindow>
            }
        </GoogleMap>
    )
}

export default Map