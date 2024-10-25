import linkedin from '../../assets/linkedin.png';
import facebook from '../../assets/facebook.png';
import insta from '../../assets/insta.png';
import workgroup from '../../assets/workgroup.png';
import todolist from '../../assets/todolist.png';
import './About.style.css';

const About = () => {
  return (
    <div className="aboutHolder">
      <div className="aboutMain">
        <div className="upperAbout">
          <img src={workgroup} alt="happy labour in fields" />
          <div className="upperAboutText">
            <h1>About Us</h1>
            <p>
              Founded in 2024, To Do was created to elevate the working
              experience. Here, your comfort and convenience come first. Find
              stylish essentials from a wide range of brands and enjoy
              hassle-free organization and working. Zero in on what you want,
              minus the crowds and long lines. Sit back, relax, and work to your
              heart's content.
            </p>
          </div>
        </div>
        <div className="bottomAbout">
          <div className="bottomAboutTitle">
            <h1>Let's connect!</h1>
            <h2>We'd love hearing from you</h2>
            <div className="bottomAboutData">
              <h3>PHONE</h3>
              <p>(123) 456-7890</p>
            </div>
            <div className="bottomAboutData">
              <h3>EMAIL</h3>
              <p>hello@todo.com</p>
            </div>
            <div className="bottomAboutData">
              <h3>SOCIAL</h3>
              <div className="socialStuff">
                <img src={facebook} alt="facebook" />
                <img src={insta} alt="insta" />
                <img src={linkedin} alt="linkedin" />
              </div>
            </div>
          </div>
          <img className="todolistimage" src={todolist} alt="to do list" />
        </div>
      </div>
    </div>
  );
};

export default About;
