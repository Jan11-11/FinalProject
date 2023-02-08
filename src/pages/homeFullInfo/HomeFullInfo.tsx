/* eslint-disable */
import { fetchGovernmentMemberFullInfo } from "../../store/actions/governmentMembersFullInfoAction";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { useEffect, useState} from "react";
import { IMemberFullInfo } from "../../types/models";
import { HomeFullInfoProduct } from "../../components/homeFullInfoProduct/HomeFullInfoProduct";
import { FullInfoActionConfirm } from "../../components/fullInfoActionConfirm"
import { Header } from "../../components/header";
import { useNavigate } from "react-router-dom";
import "./homeFullInfo.scss";
import { Loading } from "../../components/loading";
import { DisableRemove } from "../../components/disableRemove";

export const HomeFullInfo = () => {
    const [keyId, setKeyId] = useState<number | undefined | null>();
    const [remove, setRemove] = useState(false);
    const [done, setDone] = useState(false)
    const [disable,setDisable] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { membersFullInfo } = useAppSelector((state) => state.membersFullInfo);
    useEffect(() => {
    const loc:string | any = localStorage.getItem("auth");
    const local = JSON.parse(loc);
    if(local==null || local?.id!=1){
        navigate("/");
    };
        dispatch(fetchGovernmentMemberFullInfo());    
    }, [dispatch, keyId, done]);

    return (

       
        <div className={"all"}>
             {disable?
            <DisableRemove disable={disable} setDisable={setDisable}/>:""} 
            <div className={remove ? "overlay" : "overlayPassive"}></div>
            <Header
            
             />
            <div className={"main"}>
                <FullInfoActionConfirm remove={remove} setRemove={setRemove} keyId={keyId} setKeyId={setKeyId} />
                <div className={"mainTitle"}>
                    <h1>ՀՀ Կառավարության անդամներ </h1>
                    <div className={"addMember"}>
                        <button onClick={(e) => {
                            e.preventDefault();
                            navigate("/createProduct")
                        }
                        } className={"mainButton"}> <img src={"../../../government/plus.png"} />Ավելացնել
                        </button>
                    </div>
                    <div className={"memberFullInfo"}>
                        {membersFullInfo.length > 0 ? membersFullInfo.map((member: IMemberFullInfo) => {


                            return (
                                
                                <HomeFullInfoProduct disable ={disable} setDisable = {setDisable} key={member.id} done={done} setDone={setDone} member={member} keyId={keyId} setKeyId={setKeyId} remove={remove} setRemove={setRemove} />
                            )
                        }) : <Loading />}
                    </div>
                </div>
            </div>
        </div>
    );
}