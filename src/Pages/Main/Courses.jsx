 
  // src/pages/Courses.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CourseCard from '../../Components/CourseCard.jsx';
import Modal from '../../Components/Modal.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Courses = () => {
  const data = [
    {
      id: 1,
      title: "Introduction to AI",
      category: "online",
      image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae vestibulum quam.",
    },
    {
      id: 2,
      title: "React JS Basics",
      category: "online",
      image: 'https://imgs.search.brave.com/47pgCXzcH0fQcHqDKPiRSmym7PZXruKhCM0BxfQYbhw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZWNvZGVjYW1w/Lm9yZy9uZXdzL2Nv/bnRlbnQvaW1hZ2Vz/L3NpemUvdzIwMDAv/MjAyMS8wNy9yZWFj/dGNvdXJzZS5wbmc',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae vestibulum quam.",
    },
    {
      id: 3,
      title: "Advanced Data Science",
      category: "offline",
      image: 'https://images.pexels.com/photos/2911364/pexels-photo-2911364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae vestibulum quam.",
    },
    {
      id: 4,
      title: "Web Development with HTML",
      category: "offline",
      image:
        "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae vestibulum quam.",
    },
    {
      id: 5,
      title: "Machine Learning Techniques",
      category: "online",
      image: 'https://imgs.search.brave.com/H9BcCO-goNtWUABAJugDhYaEnG1KLjkwm6t0cMPr1iM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kM2Yx/aXlmeHh6OGkxZS5j/bG91ZGZyb250Lm5l/dC9jb3Vyc2VzL2Nv/dXJzZV9pbWFnZS80/NjgwZTk5ODMzYzcu/anBn',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae vestibulum quam.",
    },
    {
      id: 6,
      title: "Advanced Data Science 2 ",
      category: "offline",
      image: 'https://imgs.search.brave.com/88SRRNf3k3Rz5jl3i3E4RtpJEZcxRpOHVL5veoLSYsw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9iaWct/ZGF0YS1jZW50ZXIt/YW5hbHl6ZXMtZGF0/YS1zY2llbmNlLWJh/Y2tncm91bmQtcHJl/c2VudGF0aW9uLWJp/Zy1kYXRhLWNlbnRl/ci1hbmFseXplcy1k/YXRhLXNjaWVuY2Ut/YmFja2dyb3VuZC0x/NTkxOTY1OTguanBn',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae vestibulum quam.",
    },
  ];
  const data2 = [
    { id: 1, title: "Introduction to AI", category: "online" },
    { id: 2, title: "React JS Basics", category: "offline" },
  ];

  const [filteredData, setFilteredData] = useState(data);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filterAll = () => {
    setFilteredData(data);
    setActiveFilter('All');
  };

  const filterDataScience = () => {
    const filtered = data.filter((item) => item.category === 'offline');
    setFilteredData(filtered);
    setActiveFilter('offline');
  };

  const filterAI = () => {
    const filtered = data.filter((item) => item.category === 'online');
    setFilteredData(filtered);
    setActiveFilter('online');
  };

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const object = {};
    formData.forEach((value, key) => (object[key] = value));
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://formspree.io/f/xblrrjzv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: json,
      });

      if (response.ok) {
        toast.success('Enrollment successful!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        form.reset();
        handleCloseModal();
      } else {
        toast.error('Failed to enroll.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      toast.error('Failed to enroll.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container mx-auto lg:w-[78vw] w-full ">
        <div className="flex gap-3">
          <div className="w-[1.5rem] rounded-md h-[3rem] bg-[#DB4444]"></div>
          <span className="text-[#DB4444] font-semibold text-2xl my-auto">Courses</span>
        </div>

        <div className="container mx-auto my-5">
          <div className="flex  mb-6 lg:text-2xl text-lg border border-black">
            <button
              className={`px-4 py-2 border-r border-white text-center cursor-pointer ${activeFilter === 'All' ? 'bg-[#db4444] text-white' : ''}`}
              onClick={filterAll}
            >
              All
            </button>
            <button
              className={`px-4 py-2 border-r border-white text-center cursor-pointer ${activeFilter === 'online' ? 'bg-[#db4444] text-white' : ''}`}
              onClick={filterAI}
            >
              Online
            </button>
            <button
              className={`px-4 py-2 border-r border-white text-center cursor-pointer ${activeFilter === 'offline' ? 'bg-[#db4444] text-white' : ''}`}
              onClick={filterDataScience}
            >
              Offline
            </button>
          </div>
        </div>

        <div>
          <div className="slider-container py-5">
            <Slider {...settings}>
              {filteredData.map((course, index) => (
                <CourseCard
                  key={index}
                  image={course.image}
                  title={course.title}
                  description={course.description}
                  online={course.category}
                  onEnroll={() => handleEnroll(course)}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <Modal
        showModal={showModal}
        handleClose={handleCloseModal}
        handleSubmit={handleSubmit}
        course={selectedCourse}
      />

      <ToastContainer />
    </>
  );
};

export default Courses;
