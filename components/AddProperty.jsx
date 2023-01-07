import "react-toastify/dist/ReactToastify.css";

import {
  Button,
  Container,
  DnD,
  FormGroup,
  Input,
  Select,
  TextArea,
} from "../components";
import { ToastContainer, toast } from "react-toastify";

import { useTheme } from "../hooks";

export const AddProperty = () => {
  const { colorTheme } = useTheme();
  return (
    <section className="py-20 dark:bg-slate-900 dark:text-white">
      <Container>
        <h2 className="text-2xl font-medium text-center capitalize">
          Your property with us and be Confident that Your Room will be Filled
          Out!
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            document.getElementById("add-property-form").reset();
            toast.success("Property Added Successfully", { theme: colorTheme });
          }}
          id="add-property-form"
          className="p-10 md:p-20 rounded-xl w-full min-h-[500px] mt-7 sm:mt-10 dark:bg-slate-800"
          style={{ boxShadow: "0px 4px 63px rgba(0, 0, 0, 0.15)" }}
        >
          <legend className="font-bold text-3xl capitalize text-center text-orange-500 mb-7 sm:mb-10">
            Add a new property
          </legend>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 mb-5">
            <FormGroup>
              <label
                htmlFor="name"
                className="font-semibold text-[17px] tracking-[0.2px]"
              >
                Name <span className="text-orange-500">*</span>
              </label>

              <Input required type="text" id="name" placeholder="Enter Name" />
            </FormGroup>

            <FormGroup>
              <label
                htmlFor="address"
                className="font-semibold text-[17px] tracking-[0.2px]"
              >
                Address <span className="text-orange-500">*</span>
              </label>

              <Input
                required
                type="text"
                id="address"
                placeholder="Enter Address"
              />
            </FormGroup>

            <FormGroup>
              <label
                htmlFor="unit"
                className="font-semibold text-[17px] tracking-[0.2px]"
              >
                Unit Number <span className="text-orange-500">*</span>
              </label>

              <Input required type="text" id="unit" placeholder="Enter Unit" />
            </FormGroup>

            <FormGroup>
              <label
                htmlFor="city"
                className="font-semibold text-[17px] tracking-[0.2px]"
              >
                City <span className="text-orange-500">*</span>
              </label>

              <Select required>
                <option>Warri</option>
                <option>San Francisco</option>
                <option>Lekki</option>
                <option>Accra</option>
                <option>Lagos</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <label
                htmlFor="state"
                className="font-semibold text-[17px] tracking-[0.2px]"
              >
                State <span className="text-orange-500">*</span>
              </label>

              <Select required>
                <option>Warri</option>
                <option>San Francisco</option>
                <option>Lekki</option>
                <option>Accra</option>
                <option>Lagos</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <label
                htmlFor="room"
                className="font-semibold text-[17px] tracking-[0.2px]"
              >
                Room Type <span className="text-orange-500">*</span>
              </label>

              <Select required>
                <optgroup label="Private">
                  <option>1 bedroom</option>
                  <option>2 bedroom</option>
                  <option>3 bedroom</option>
                  <option>4 bedroom</option>
                  <option>5 bedroom</option>
                </optgroup>
                <optgroup label="Shared">
                  <option>1 bedroom</option>
                  <option>2 bedroom</option>
                  <option>3 bedroom</option>
                  <option>4 bedroom</option>
                  <option>5 bedroom</option>
                </optgroup>
              </Select>
            </FormGroup>

            <FormGroup>
              <label
                htmlFor="price"
                className="font-semibold text-[17px] tracking-[0.2px]"
              >
                Price <span className="text-orange-500">*</span>
              </label>

              <Select required>
                <option>{"<"}$1000/Mon</option>
                <option>{"<"}$2000/Mon</option>
                <option>{"<"}$5000/Mon</option>
                <option>{"<"}$10000/Mon</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <label
                htmlFor="room"
                className="font-semibold text-[17px] tracking-[0.2px]"
              >
                Room Type <span className="text-orange-500">*</span>
              </label>

              <Select required>
                <optgroup label="Private">
                  <option>1 bedroom</option>
                  <option>2 bedroom</option>
                  <option>3 bedroom</option>
                  <option>4 bedroom</option>
                  <option>5 bedroom</option>
                </optgroup>
                <optgroup label="Shared">
                  <option>1 bedroom</option>
                  <option>2 bedroom</option>
                  <option>3 bedroom</option>
                  <option>4 bedroom</option>
                  <option>5 bedroom</option>
                </optgroup>
              </Select>
            </FormGroup>
          </div>

          <div className="grid gap-5 mb-10">
            <FormGroup>
              <label
                htmlFor="description"
                className="font-semibold text-[17px] tracking-[0.2px]"
              >
                Description <span className="text-orange-500">*</span>
              </label>

              <TextArea required placeholder="Enter Description"></TextArea>
            </FormGroup>

            <FormGroup>
              <label
                htmlFor="description"
                className="font-semibold text-[17px] tracking-[0.2px]"
              >
                Upload Photos
              </label>

              <DnD />
            </FormGroup>
          </div>

          <Button extraClasses="md:w-[500px] mx-auto">Add New Property</Button>
        </form>

        <ToastContainer />
      </Container>
    </section>
  );
};
