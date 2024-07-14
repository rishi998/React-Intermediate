import Course from "../components/course";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import booklist from "../../public/booklist.json";
function Courses() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
