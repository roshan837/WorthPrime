import { Box, Typography } from "@mui/material";
import ServiceCard from "./ServiceCard";

export default function PageLayout({ data }) {
  return (
    <div className="p-10">
      <Box className="bg-white p-12 rounded-[32px] lg:rounded-[120px] mb-[50px] shadow-lg">
        <Typography variant="h5" className="text-center">
          {data.title}
        </Typography>
        <Typography variant="body1">{data.description}</Typography>
      </Box>
      <Typography variant="h5" className="!font-bold">
        {data.serviceTitle}
      </Typography>
      <div className="my-[32px] grid-layout md:grid-cols-2 lg:grid-cols-3">
        {data.serviceList.map((data, index) => (
          <ServiceCard service={data} key={index} />
        ))}
      </div>
      <Typography variant="h5" className="!mt-[80px] !font-bold">
        {data.needTitle}
      </Typography>
      <div className="my-[32px] grid-layout md:grid-cols-2 lg:grid-cols-3">
        {data.needList.map((data, index) => (
          <ServiceCard service={data} key={index} />
        ))}
      </div>
      {data.details.map((detail, index) => (
        <p
          key={index}
          className="font-medium mt-[32px] text-[0.8rem] lg:text-[1.5rem]">
          {detail}
        </p>
      ))}
    </div>
  );
}
