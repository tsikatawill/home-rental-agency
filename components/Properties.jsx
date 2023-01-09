import {
  Button,
  Container,
  PaginationButton,
  PropertyCard,
  SectionHeader,
} from "../components";
import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { PropertyItems } from "../data";

export const Properties = () => {
  const [paginated, setPaginated] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getPages = () => {
    let pagesArray = [];
    for (let i = 1; i <= Math.ceil(PropertyItems.length / 6); i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  };

  const pages = getPages();

  const goToFirst = () => setCurrentPage(1);

  const goToPage = (pageNumber) => setCurrentPage(pageNumber);

  const goToNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const sliceDifference = 6;

    const lastProperty = currentPage * sliceDifference;
    const firstProperty = lastProperty - sliceDifference;

    const paginate = () => {
      setPaginated(PropertyItems.slice(firstProperty, lastProperty));
    };

    paginate();
  }, [currentPage]);

  return (
    <section className="bg-[#F5F5F5] dark:bg-slate-700 dark:text-white py-20">
      <Container>
        <div className="flex justify-between gap-5 sm:flex-row items-center flex-col">
          <SectionHeader text="List of properties" />

          <Button>View All Properties</Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {paginated.map((item) => (
              <PropertyCard {...item} key={item.id} />
            ))}
          </AnimatePresence>
        </div>

        <div className="flex font-bold mt-10 sm:mt-20 rounded-md border  border-[#bdbdbd] w-fit mx-auto overflow-hidden">
          <PaginationButton
            handleClick={goToFirst}
            disabled={currentPage === 1}
          >
            First
          </PaginationButton>
          {pages.map((item) => (
            <PaginationButton
              current={currentPage === item}
              key={item}
              handleClick={() => goToPage(item)}
            >
              {item}
            </PaginationButton>
          ))}
          <PaginationButton
            disabled={currentPage === pages.at(-1)}
            handleClick={goToNext}
          >
            Next
          </PaginationButton>
        </div>
      </Container>
    </section>
  );
};
