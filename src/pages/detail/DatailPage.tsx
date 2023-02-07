/* eslint-disable */
import "./detail.scss";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/header";
export function DatailPage() {
    const location_data = useLocation();
    const minister = location_data.state.user;

    return (
        <div className={'detail'}>
            <Header/>
            <div className='greenline' id='greenline'></div>
            <div className='contan' id='contan'>
                <div className='chunk' id='chunk'>
                    <div className='chunkleftdiv' id='chunkleftdiv'>
                        <div className='chunkleft' id='chunkleft'>
                            <img src={minister.picture} />
                        </div>
                    </div>
                    <div className='chunkright' id='chunkright'>
                        <p className='fullName' id='fullName'>{minister?.fullname} </p>
                        <p className='fullInfo' id='fullInfo'>{minister?.position}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
/* eslint-disable */