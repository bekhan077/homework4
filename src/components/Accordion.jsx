import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdOutlineArrowOutward } from "react-icons/md";
import AccordionSummary from "@mui/material/AccordionSummary";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleMouseEnter = (panel) => {
    setExpanded(panel);
  };

  const handleMouseLeave = () => {};

  return (
    <div className="w-[90%] bg-[#ebebed] [z-index:1]  mb-[40px]">
      <Accordion
        expanded={expanded === "panel1"}
        onMouseEnter={() => handleMouseEnter("panel1")}
        onMouseLeave={handleMouseLeave}
        className=" w-full bg-[#ebebed]"
      >
        <AccordionSummary
          expandIcon={
            <MdOutlineArrowOutward className="text-[35px] rotate-[180deg]  text-black" />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="w-full !bg-[#ebebed]"
        >
          <Typography className="w-[49%] font-normal  text-[19px] ">
            Fitness & wellness
          </Typography>
          <Typography className="w-[50%] !text-[25px] underline font-semibold  ">
            ClassPass
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="w-full flex bg-[#ebebed]">
          <Typography className="w-[48%]  text-[#ebebed]  font-normal text-[19px]">
            Fitness & wellness
          </Typography>
          <div>
            <Typography className="w-[700px] !mb-[50px] !text-[19px] font-normal border ">
              A boutique fitness membership app, ClasPass provides acces to
              in-studio <br /> workouts, beauty and wellnes appointments, and
              on-demand exercise classes.
            </Typography>
            <Typography className="w-[700px] border !mb-[50px] !text-[19px] font-normal ">
              <img
                className="w-[700px] h-[300px] "
                src="https://www.disciplemedia.com/wp-content/uploads/2019/07/madison-lavern-4gcqRf3-f2I-unsplash-scaled-wpv_1000x400_center_center.jpg"
                alt="img"
              />
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onMouseEnter={() => handleMouseEnter("panel2")}
        onMouseLeave={handleMouseLeave}
        className=" w-full bg-[#ebebed]"
      >
        <AccordionSummary
          expandIcon={
            <MdOutlineArrowOutward className="rotate-[180deg] text-[35px] text-black" />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="w-full !bg-[#ebebed]"
        >
          <Typography className="w-[49%] font-normal  text-[19px]">
            Food & beverage
          </Typography>
          <Typography className="w-[50%] !text-[25px] underline font-semibold">
            Bevi
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="w-full flex bg-[#ebebed]">
          <Typography className="w-[48%]  font-normal text-[19px] text-[#ebebed]">
            Fitness & wellness
          </Typography>
          <div>
            <Typography className="w-[700px] !mb-[50px] !text-[19px] font-normal border ">
              A techstars graduate, Bevi installs smart water dispensers in
              modern offices, <br /> turning filtered tap water into delicious
              fizzy drinks and promoting greater <br /> sustainability in the
              workplace
            </Typography>
            <Typography className="w-[700px] font-normal border !mb-[50px] !text-[19px]">
              <img
                className="w-[700px] h-[400px] "
                src="https://api.hub.jhu.edu/factory/sites/default/files/styles/landscape/public/ww-hydration-hub.jpg"
                alt="img"
              />
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onMouseEnter={() => handleMouseEnter("panel3")}
        onMouseLeave={handleMouseLeave}
        className=" w-full bg-[#ebebed]"
      >
        <AccordionSummary
          expandIcon={
            <MdOutlineArrowOutward className=" text-[35px] rotate-[180deg] text-black" />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="w-full !bg-[#ebebed]"
        >
          <Typography className="w-[49%] font-normal  text-[19px] ">
            Fintech
          </Typography>
          <Typography className="w-[50%]  underline font-semibold !text-[25px] ">
            Dealcloud
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="w-full flex bg-[#ebebed]">
          <Typography className="w-[48%]  font-normal text-[19px] text-[#ebebed]">
            Fitness & wellness
          </Typography>
          <div>
            <Typography className="w-[700px]  !mb-[50px] !text-[19px] font-normal border">
              Dealcloud equips professional and financial services firms with
              robust tools for <br /> optimizing deal execution and client
              relationship managment.
            </Typography>
            <Typography className="w-[700px]  !mb-[50px] !text-[19px] font-normal border">
              <img
                className="w-[700px] h-[400px] "
                src="https://img.freepik.com/free-vector/gradient-stock-market-concept_23-2149166910.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716163200&semt=sph"
                alt="img"
              />
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onMouseEnter={() => handleMouseEnter("panel4")}
        onMouseLeave={handleMouseLeave}
        className=" w-full bg-[#ebebed]"
      >
        <AccordionSummary
          expandIcon={
            <MdOutlineArrowOutward className="rotate-[180deg] text-[35px] text-black" />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="w-full !bg-[#ebebed]"
        >
          <Typography className="w-[49%] font-normal  text-[19px] ">
            Healthtech
          </Typography>
          <Typography className="w-[50%] !text-[25px] underline font-semibold ">
            Dialogue
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="w-full flex bg-[#ebebed]">
          <Typography className="w-[48%]  font-normal text-[19px] text-[#ebebed]">
            Fitness & wellness
          </Typography>
          <div>
            <Typography className="w-[700px] font-normal border !mb-[50px] !text-[19px]">
              A Canadian telemedicine stratup, Dialogue's platform provides
              acces to an <br /> expansive virtual medical team for unparalelled
              patient-centric care.
            </Typography>
            <Typography className="w-[700px] !mb-[50px] !text-[19px] font-normal border">
              <img
                className="w-[700px] h-[400px] "
                src="https://thumbs.dreamstime.com/b/doctor-holding-digital-tablet-meeting-room-portrait-beautiful-mature-woman-looking-camera-confident-female-using-164999229.jpg"
                alt="img"
              />
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onMouseEnter={() => handleMouseEnter("panel5")}
        onMouseLeave={handleMouseLeave}
        className=" w-full bg-[#ebebed]"
      >
        <AccordionSummary
          expandIcon={
            <MdOutlineArrowOutward className="rotate-[180deg] text-[35px] text-black" />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="w-full !bg-[#ebebed]"
        >
          <Typography className="w-[49%] font-normal  text-[19px] ">
            Healthtech
          </Typography>
          <Typography className="w-[50%] !text-[25px]  underline font-semibold  ">
            Thirty Madison
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="w-full flex bg-[#ebebed]">
          <Typography className="w-[48%]  font-normal text-[19px] text-[#ebebed]">
            Fitness & wellness
          </Typography>
          <div>
            <Typography className="w-[700px]  !mb-[50px] !text-[19px] font-normal border">
              Designed to help people to virtually manage their chronic
              conditions, Thirty <br />
              Madison's portfolio encompasses traetment for everyting from
              migraines to hair <br />
              loss.
            </Typography>
            <Typography className="w-[700px]  !mb-[50px] !text-[19px] font-normal border">
              <img
                className="w-[700px] h-[400px] "
                src="https://d39l2hkdp2esp1.cloudfront.net/img/photo/122239/122239_00_2x.jpg?20170601014818"
                alt="img"
              />
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
