import { Button, Container } from "../components";

export const Lifestyle = () => {
  return (
    <section className="py-20 dark:bg-slate-900 dark:text-white text-black">
      <Container>
        <div className="flex items-center gap-20 flex-col md:flex-row">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-end">
              <CustomImage
                type={1}
                title="Flexible Leases"
                image="/images/lease.jpg"
              />
              <CustomImage
                type={2}
                title="7-Day Happiness Guaranteed"
                image="/images/happiness.jpg"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <CustomImage
                type={3}
                image="/images/cleaning.jpg"
                title="Monthly House Cleaning"
              />
              <CustomImage type={4} image="/images/roommates.jpg" />
            </div>
          </div>

          <div className="space-y-5 text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="font-extrabold text-[40px] leading-[54px]">
              Flexibility and options to suit your lifestyle.
            </h2>
            <p className="text-lg leading-[32px] pb-5">
              You need it? We got it. We make finding your next home easy,
              comfortable, and simple. From our happiness guarantee to our
              selective roommate finder option. We provide you the flexibility
              that you most desire.
            </p>

            <Button rounded>Search Rooms</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

const CustomImage = ({
  title = "Choose Your Own Roommate",
  type = 1,
  image = "/images/lease.jpg",
}) => {
  const getDimensions = () => {
    switch (type) {
      case 1:
        return "sm:w-[250px] h-[335px]";
      case 2:
        return "sm:w-[270px] h-[270px]";
      case 3:
        return "sm:w-[212px] h-[285px]";
      case 4:
        return "sm:w-[338px] h-[356px]";
      default:
        return "sm:w-[338px] h-[356px]";
    }
  };
  const dimensions = getDimensions();

  return (
    <div
      className={`${dimensions} w-full rounded-[20px] overflow-hidden relative`}
      style={{
        background: `url(${image}) center center/cover no-repeat`,
      }}
    >
      <div className="w-full h-full bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.7)] transition-all duration-200 ease-in cursor-pointer grid hover:place-content-center">
        <p className="top-0 w-full p-5 text-2xl font-semibold transition-all duration-1000 text-white text-center">
          {title}
        </p>
      </div>
    </div>
  );
};
