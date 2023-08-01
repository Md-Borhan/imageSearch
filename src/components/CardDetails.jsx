import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { BsFacebook, BsTwitter, BsWhatsapp } from "react-icons/bs";
const CardDetails = ({ openModal, setOpenModal, singleProject }) => {
  const [selectedText, setSelectedText] = useState("");
  console.log(selectedText);

  const {
    webformatURL,
    previewWidth,
    previewHeight,
    webformatWidth,
    webformatHeight,
    imageWidth,
    imageHeight,
    user,
    user_id,
    type,
    views,
    downloads,
    likes,
    tags,
  } = singleProject;

  const selectImageSizes = [
    { value: "Small", width: previewWidth, height: previewHeight },
    { value: "Medium", width: webformatWidth, height: webformatHeight },
    { value: "Large", width: imageWidth, height: imageHeight },
  ];

  // Handle changes when a radio button is selected
  const handleSelect = (e) => {
    setSelectedText(e.target.value);
  };

  // Handle social share
  const handleTwitterShare = () => {
    const twitterShareUrl = `https://twitter.com/share?url=${webformatURL}`;
    window.open(twitterShareUrl, "popup", "width=500", "left=500", "top=500");
  };

  const handleFacebookShare = () => {
    const twitterShareUrl = `https://www.facebook.com/sharer.php?u=${webformatURL}`;
    window.open(twitterShareUrl, "popup", "width=500", "left=500", "top=500");
  };

  const handleWhatsappShare = () => {
    const twitterShareUrl = `https://web.whatsapp.com/send?text=${webformatURL}`;
    window.open(twitterShareUrl, "popup", "width=500", "left=500", "top=500");
  };

  if (openModal)
    return (
      <div className="px-4 md:px-6 lg:px-8 bg-black bg-opacity-25 fixed z-40 flex items-center justify-center inset-0 backdrop-blur-sm overflow-scroll">
        <div className="w-full h-screen lg:h-auto overflow-y-scroll  md:overflow-visible  m-auto flex flex-col relative md:text-justify bg-white rounded-md text-black overflow-scroll">
          <div className="flex items-center justify-between rounded-md gap-3 py-8 px-4 sm:px-8 bg-[#F5F5F5]">
            <p className="font-medium text-base sm:text-xl">
              Preview ID: {user_id}
            </p>
            <span
              onClick={() => setOpenModal(!openModal)}
              className="  text-[#3B4043] rounded-md border text-2xl border-[#3B4043] "
            >
              <GrFormClose />
            </span>
          </div>
          <div className=" w-full py-10 px-4 md:px-8 overflow-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-7 sm:gap-4 md:gap-10">
              <div className="col-span-4">
                <img
                  className="rounded-md w-full  md:h-[550px]"
                  src={webformatURL}
                  alt="Category Image"
                />
              </div>
              <div className="col-span-3 mt-4 sm:mt-0">
                <p className="font-medium text-xl mb-4 text-[#3B4043]">
                  Download
                </p>
                <div className="border text[#475467] rounded-md">
                  {selectImageSizes?.map((selectImageSize, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between py-3 px-2 sm:px-4 border-b ${
                        selectedText == selectImageSize.width
                          ? "bg-[#F5F5F5]"
                          : ""
                      }`}
                    >
                      <span className="text-gray-700">
                        {selectImageSize.value}
                      </span>
                      <div className="flex items-center text-sm sm:text-base">
                        <span className="text-right mr-2 sm:mr-6">
                          <strong>
                            {selectImageSize.width} X {selectImageSize.height}
                          </strong>
                        </span>
                        <input
                          type="checkbox"
                          name="textOption"
                          value={selectImageSize.width}
                          checked={selectedText == selectImageSize.width}
                          onChange={handleSelect}
                          className="mr-0 sm:mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 checkbox checkbox-success"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5">
                  <button className="btn hover:bg-[#4bc34bc0] text-white w-full bg-[#4BC34B] py-3 rounded-md">
                    Download for free!
                  </button>
                </div>
                <div>
                  <p className="font-medium text-xl my-5 text-[#3B4043]">
                    Information
                  </p>
                  <div className="grid grid-cols-1  md:grid-cols-3 gap-6 md:gap-20 text-xl md:text-2xl text-[#717579] font-semibold ">
                    <span>
                      User <br />{" "}
                      <span className="text-[#3B4043] mt-3">{user}</span>
                    </span>
                    <span>
                      User ID <br />{" "}
                      <span className="text-[#3B4043] mt-3">{user_id}</span>
                    </span>
                    <span>
                      Type <br />{" "}
                      <span className="text-[#3B4043] mt-3">{type}</span>
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 text-xl md:text-2xl text-[#717579] font-semibold mt-5">
                    <span>
                      Views <br />{" "}
                      <span className="text-[#3B4043] mt-3">{views}</span>
                    </span>
                    <span>
                      Downloads <br />{" "}
                      <span className="text-[#3B4043] mt-3">{downloads}</span>
                    </span>
                    <span>
                      Likes <br />
                      <span className="text-[#3B4043] mt-3">{likes}</span>
                    </span>
                  </div>
                  <div className="mt-12 flex items-center gap-5">
                    <span className="text-[#3B4043] font-bold">
                      {" "}
                      Share With:
                    </span>
                    <span
                      className="cursor-pointer"
                      title="Twitter"
                      onClick={handleTwitterShare}
                    >
                      <BsTwitter size={22} />
                    </span>
                    <span
                      className="cursor-pointer"
                      title="Whatsapp"
                      onClick={handleWhatsappShare}
                    >
                      <BsWhatsapp size={22} />
                    </span>
                    <span
                      className="cursor-pointer"
                      title="Facebook"
                      onClick={handleFacebookShare}
                    >
                      <BsFacebook size={22} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mt-12">
              <span className="text-[#3B4043] font-bold"> Tags:</span>
              {tags.split(",").map((tag, i) => (
                <span
                  className="bg-[#F5F5F5] py-2 px-5 rounded-md text-[#767676]"
                  key={i}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default CardDetails;
