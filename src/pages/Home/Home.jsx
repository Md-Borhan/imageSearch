// import bgImage from "../../assets/hero-bg.png"
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Loader from "../../components/Loader";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CardDetails from "../../components/CardDetails";
import HeroBg from "../../assets/hero-bg.png";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [singleProject, setSingleProject] = useState({});
  const [heroBg, setHeroBg] = useState("");
  console.log(heroBg);

  // Show modal for details data show
  const showDetails = (image) => {
    setOpenModal(!openModal);
    setHeroBg(image);
  };

  // Handle search text
  const handleSearchText = (e) => {
    e.preventDefault();
    const value = e.target.searchValue.value;
    setSearchText(value);
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://pixabay.com/api/?key=38560367-f0f4eb9d375853f63f8ad6dfc&q=${searchText}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.hits);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("Error fetching data: ", error);
      });
  }, [searchText]);
  return (
    <>
      <div
        className="px-4 md:px-0 pt-5 md:pt-16 h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url('${heroBg == "" ? HeroBg : heroBg}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mx-auto text-center w-full md:w-9/12 lg:w-8/12 ">
          Discover over 2,000,000 free Stock Images
        </h2>
        <div className="w-full">
          <div className="flex w-full md:w-8/12 lg:w-5/12 mx-auto relative flex-col items-center justify-center mt-20">
            <form onSubmit={handleSearchText} className="w-full">
              <input
                name="searchValue"
                type="text"
                placeholder="Search"
                className="input pl-14 input-bordered w-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 text-white border-[#B6B6B66E] placeholder:text-white shadow-inner shadow-[#ffffff8e]"
              />

              <span className="absolute text-white left-3 top-4  pr-2 border-r-2">
                <CiSearch size={22} />
              </span>
              <input
                type="submit"
                value="GO!"
                className="absolute right-3 hover:text-black top-[9px] btn border-2 btn-sm bg-transparent text-white "
              />
            </form>
          </div>
          {searchText == "" ? (
            <div className="text-center mt-8">
              <p className="bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 inline-block rounded-md text-center mx-auto text-white border-[#B6B6B66E] placeholder:text-white shadow-inner shadow-[#ffffff8e] py-2 px-6 ">
                <strong>Trending: </strong>flowers, love, forest, river
              </p>
            </div>
          ) : (
            <p className="text-[42px] font-bold text-white text-center mt-6">
              Results: {searchText}
            </p>
          )}
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-11 px-4 md:px-6 lg:px-8">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 770: 2, 1200: 3 }}
          >
            <Masonry gutter="50px">
              {categories.map((category, i) => (
                <div key={i} onClick={() => setSingleProject(category)}>
                  <img
                    onClick={() => showDetails(category.webformatURL)}
                    src={category.webformatURL}
                    className="rounded-md cursor-pointer"
                    style={{ width: "100%", display: "block" }}
                    alt=""
                  />
                  <div className="flex flex-wrap flex-col md:flex-row space-y-4 md:space-y-0 justify-between mt-3">
                    {category.tags.split(",").map((tag, i) => (
                      <span
                        className="bg-[#F5F5F5] py-2 mb-3 px-5 rounded-md text-[#767676]"
                        key={i}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      )}
      <CardDetails
        openModal={openModal}
        setOpenModal={setOpenModal}
        singleProject={singleProject}
      />
    </>
  );
};

export default Home;
