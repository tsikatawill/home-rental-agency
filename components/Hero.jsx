import { Container, Map } from "../components";
import { scaleUp, slideX, slideY } from "../animations";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export const Hero = () => {
  const [location, setLocation] = useState("San Francisco");
  const [coordinates, setCoordinates] = useState([13.7, -88.1]);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_MAP_KEY,
        "X-RapidAPI-Host": "opentripmap-places-v1.p.rapidapi.com",
      },
    };

    fetch(
      `https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname?name=${location}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setCoordinates([response.lat, response.lon]);
        console.log([response.lat, response.lon]);
        setSubmitting(false);
      })
      .catch((err) => {
        alert("Failed to get location");
        setSubmitting(false);
        console.error({ err });
      });
  };

  return (
    <section className="h-full mt-20">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 place-content-center items-center text-white">
          <motion.h1
            variants={slideX()}
            transition={{ duration: 0.3 }}
            initial="initial"
            animate="animate"
            className="capitalize font-bold text-[52px] leading-[70px]"
          >
            The most affordable place to stay in the san franciso bay area
          </motion.h1>

          <motion.div
            variants={scaleUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1, when: "beforeChildren" }}
            className="justify-self-center  sm:justify-self-end"
          >
            <motion.div
              variants={scaleUp}
              className="rounded-2xl border border-[#f9f9f9] overflow-hidden max-w-[408px] h-[340px] mb-5 mx-auto bg-slate-500"
            >
              <Map coordinates={coordinates} />
            </motion.div>

            <motion.div
              variants={scaleUp}
              className="bg-white text-black rounded-[10px] h-[88px] p-4 max-w-[408px] border border-[rbga(0,0,0,0.2)]"
            >
              <form
                className="border border-[#e6e6e6] rounded-md overflow-hidden flex gap-2 bg-[#f9f9f9]"
                onSubmit={(e) => handleSubmit(e)}
              >
                <select
                  name=""
                  id=""
                  className="focus:outline-0 h-14 p-4 pr-0 mr-6 bg-transparent cursor-pointer"
                >
                  <option value="all">All types</option>
                  <option value="apartment">Apartment</option>
                  <option value="2-bed">2-bedroom</option>
                  <option value="3-bed">3-bedroom</option>
                </select>
                <div className="flex border-l border-l-[#e6e6e6]">
                  <input
                    type="text"
                    placeholder="Location"
                    value={submitting ? "Loading map..." : location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="py-[15px] px-[23px] w-full p-2 focus:outline-0 bg-transparent transition-all duration-200"
                    required
                    spellCheck="false"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="bg-[#23A6F0] disabled:bg-slate-600 disabled:cursor-not-allowed h-14 w-20 grid place-content-center"
                  >
                    <Image
                      src="/icons/search.svg"
                      width={30}
                      height={30}
                      alt="search.svg"
                    />
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
