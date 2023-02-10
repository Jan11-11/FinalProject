/* eslint-disable */
import "./header.scss";
import { useNavigate } from "react-router-dom";
import { deleteUploadImage } from "../../store/slices/GovernmetMembersFullInfo";
import { useAppDispatch } from "../../hooks";
export const Header = () => {
    const dispatch=useAppDispatch();
    const navigate = useNavigate();
    return (
        <header className={"header"}>
            <div className={"headerContainer"}>
                <div>
                    <div className={"headerGerbPart"}>
                        <img src={"../../../../government/gerb.png"} />
                        <h5 id={"headerContainerH5"} className={"headerContainerH5"}>Հայաստանի Հանրապետության Կառավարություն</h5>
                    </div>
                </div>
                <div className={"headerVectorPartParent"}>
                    <div className={"headerVectorPart"} onClick={(event) => {
                        event.preventDefault();
                        localStorage.removeItem('auth');
                        localStorage.removeItem('id');
                        dispatch(deleteUploadImage());
                        navigate("/");
                    }
                    }>
                        <img src={"../../../../government/Vectorright.png"} />
                        <h6 id={"headerContainerH6"} className={"headerContainerH6"}>Դուրս գալ</h6>
                    </div>
                </div>
            </div>
        </header>
    );
}