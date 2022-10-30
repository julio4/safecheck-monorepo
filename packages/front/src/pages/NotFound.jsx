//import "../css/NotFound.css";

//import ErrorDesign from '../assets/404.svg';

const NotFound = (props) => {
  return (
    <a  target="_blank" href="https://codepen.io/uiswarup/full/KKRaNPm">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 mt-5 mb-5">
            <img src={require("../assets/404.png")} alt={"error_img"}/>
          </div>
        </div>
      </div>
    </a>
  )
};

export default NotFound;