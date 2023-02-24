/*eslint-disable*/
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { fetchGovernmentMembersInfo } from "../../store/actions/governmentMembersFullInfoAction";
import { IMemberInfo } from "../../types/models";
import { HomeInfoProduct } from "../../components/homeInfoProduct";
import { Header } from "../../components/header";
import "./home.scss";
import io from "socket.io-client"
import { useNavigate } from "react-router-dom";
import auth from "../../auth";


export const Home = () => {
    const navigate = useNavigate()
    const [socket, setSocket] = useState<any>( null )
    const [socketColor, setSocketColor] = useState( 0 );
    const { membersFullInfo, loading } = useAppSelector( ( state ) => state.membersFullInfo );
    const dispatch = useAppDispatch();
    const URL = process.env.REACT_APP_BASE_URL1;

    useEffect( () => {
        const loc: string | any = localStorage.getItem( "auth" );
        const local = JSON.parse( loc );
        if ( local == null || local?.role != "primeminister" ) {
            navigate( "/" );
        };
        if ( local?.role == "primeminister" ) {
            const ws = io( `${ URL }`, {
                extraHeaders: {
                    Authorization: auth().accessToken,
                    //auth_token
                }
            } );
        
            
            ws.on("REFRESH",(str:any)=>{
                
                
                if (ws && str.key==="refresh") {
                    setSocketColor(0);
                }
            })
            setSocket( ws );
        }
        dispatch( fetchGovernmentMembersInfo() )

    }, [dispatch] );


    return (
        <div id={"body"} className={"body"}>
            <Header />
            <div className={"container"} id={"container"}>
                <h1 id={"containerTitle"}>ՀՀ Կառավարության անդամներ</h1>
                <div id={"members"} className={"members"}>
                    {membersFullInfo.length > 0 ? membersFullInfo.map( ( member: IMemberInfo ) => {
                        return (
                            <HomeInfoProduct member={member} key={member.id} socket={socket} socketColor={socketColor} setSocketColor={setSocketColor} />
                        )
                    } ) : loading
                    }
                </div>
            </div>
        </div>
    );
}
/*eslint-disable*/
