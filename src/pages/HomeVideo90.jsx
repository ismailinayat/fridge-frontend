
import {useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import QRR from '../components/QRR'

import {useSocket} from '../contexts/SocketProvider';



function HomeVideo90() {


    const navigate = useNavigate()
    const socket = useSocket();


    useEffect(() => {
        if (socket == null) return
        socket.on('shop', ()=> {
            console.log('This came from joystick')
            navigate('/shop')
        })

        return () => socket.off('shop')
    }, [socket, navigate])


    return (
        <div className="video-container90">
            
            <QRR></QRR>
            
            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop>
                  <source src="/home/fridgevideo.mp4" type="video/mp4"/>
                  Your browser is not supported!
                </video>
              </div>
        </div>
    )
}

export default HomeVideo90
