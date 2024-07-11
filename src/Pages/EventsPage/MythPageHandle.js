import "./MythPageHandle.css";
import myths from "./myths";
import MythPage from "./MythPage";

const MythPageHandle = () => {
    return (
        <>
            <div className="fullpage">
                <h1 className="heading">Find your Events HERE!!</h1>
                <div className="container-1">
                    {myths.map((m, index) => (
                        <MythPage
                            key={index}
                            image={m.img}
                            question={m.ques}
                            link={m.link.substring(1)} // Remove leading slash for route parameter
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default MythPageHandle;
