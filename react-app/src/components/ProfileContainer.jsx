
import ProfileCard from "./ProfileCard";

function ProfileContainer () {
    return (
        <>
        <div id="profile-container">
            
            <ProfileCard className="pCard" name="Milo" age="30" bio="A cool dude" />
            <ProfileCard className="pCard" name="Penelope" age="19" bio="A creative young lady" />
            <ProfileCard className="pCard" name="Jay" age="43" bio="The G.O.A.T" />
            <ProfileCard className="pCard" name="Michael" age="20" bio="The bestest friend a person could have" />
            <ProfileCard className="pCard" name="Tamila" age="29" bio="A happy camper" />
            <ProfileCard className="pCard" name="Ricki" age="37" bio="A very seriuos student" />
        
        
        </div>
        </>
        
    );
}
export default ProfileContainer;