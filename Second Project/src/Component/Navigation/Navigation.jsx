import style from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={`${style.navigation} container`}>
      <div className="logo">
        <img src="\public\Images\logo.jpg" alt="logo" />
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Contact</li>

      </ul>
    </nav>
  )
}

export default Navigation