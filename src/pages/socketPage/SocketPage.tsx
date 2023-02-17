/* eslint-disable */
import "./socketPage.scss";
import { useEffect, useState } from "react";
import {useAppDispatch } from "../../hooks";
import { fetchGovernmentMembersInfo } from "../../store/actions/governmentMembersFullInfoAction";
import io from "socket.io-client"
import { useNavigate, useLocation } from "react-router-dom";
import auth from "../../auth";
   
 
 
 

export function SocketPage() {
    const [socket, setSocket] = useState<any>(null)
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const URL = process.env.REACT_APP_BASE_URL1;
    useEffect(() => {
    const loc:string | any = localStorage.getItem("auth");
    const local = JSON.parse(loc);
    if(local==null || local?.role!="parlamentpresident"){
        navigate("/");
    };
        const ws = io(`${URL}`, {
            extraHeaders: {
                Authorization: auth().accessToken,
                //auth_token
            }
        });
        setSocket(ws);
        ws.on("click", (user: any) => {
            if(auth().accessToken){
            const { id } = user;
            if (ws && ws != null) {
                navigate("/detail", { state: { user } })
            }
            
        }})
        
        
    
        dispatch(fetchGovernmentMembersInfo())
    }, [dispatch]);
    return (
        <div className="socketPage">
            <header className={"header"}>
                <div className={"headerContainer"}>
                    <div>
                        <div className={"headerGerbPart"}>
                            <img src={"../../../../government/logo3.svg"} />
                            <h5 id={"headerContainerH5"} className={"headerContainerH5"}>Հայաստանի Հանրապետության Կառավարություն</h5>
                        </div>
                    </div>
                    <div className={"headerVectorPartParent"}>
                        <div className={"headerVectorPart"} onClick={(event) => {
                            event.preventDefault();
                            localStorage.removeItem('auth');
                            localStorage.removeItem('id');
                            navigate("/");
                            navigate(0)
                        }
                        }>
                            <img src={"../../../../government/Vectorright.png"} />
                            <h6 id={"headerContainerH6"} className={"headerContainerH6"}>Դուրս գալ</h6>
                        </div>
                    </div>
                </div>
            </header>

            <div className='socket' id="socket">
                <div className='logo' id='logo'>< img src={"../../../government/logo3.svg"} /></div>
                <div className='txt' id='txt'>Հայաստանի Հանրապետության<br /> Կառավարություն</div>
            </div>
        </div>
    );
}
