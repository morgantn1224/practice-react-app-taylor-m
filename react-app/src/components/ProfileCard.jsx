const ProfileCard = ({name, age, bio}) => {
    return (
        <div className="profile-card">
            <h3>Name: {name}</h3>
            <h5>Age: {age}</h5>
            <h5>Bio: {bio}</h5>

        </div>
    );
}
export default ProfileCard;