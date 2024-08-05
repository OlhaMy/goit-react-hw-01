import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.card}>
      <div className={s.cardName}>
        <img className={s.img} src={image} alt={name + "avatar"} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.socialBox}>
        <li className={s.box}>
          <span className={s.title}>Followers</span>
          <span className={s.status}>{stats.followers}</span>
        </li>
        <li className={s.box}>
          <span className={s.title}>Views</span>
          <span className={s.status}>{stats.views}</span>
        </li>
        <li className={s.box}>
          <span className={s.title}>Likes</span>
          <span className={s.status}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
