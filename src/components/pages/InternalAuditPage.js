import { Box, Divider, List, ListItem, Typography } from "@mui/material";

export default function InternalAuditPage() {
  const serviceList = [
    {
      title: "Thorough Evaluation",
      detail:
        "Our experienced staff meticulously examines your company’s internal procedures to spot both areas that could want development and those that are already excellent. This all-encompassing strategy makes sure that no facet of your business operations is ignored.",
    },
    {
      title: "Risk Identification",
      detail:
        "We carefully evaluate any hazards that might have an impact on your company. We assist you in proactively mitigating risks by discovering weaknesses, protecting your assets and reputation.",
    },
    {
      title: "Efficiency Improvement",
      detail:
        "In addition to detecting issues, our internal audit approach also suggests custom solutions to organize your business’s processes. This results in increased productivity, lower expenses, and better overall results.",
    },
    {
      title: "Regulatory Compliance",
      detail:
        "We ensure that your business adheres to relevant laws and regulations, giving you peace of mind that your operations are conducted within legal boundaries.",
    },
    {
      title: "Data-Driven Insights",
      detail:
        "Through in-depth analysis, we provide you with actionable insights that empower your decision-making. Our reports offer a clear picture of your strengths and opportunities for growth.",
    },
  ];

  const needList = [
    {
      title: "Expertise",
      detail:
        "Our experienced team of financial professionals brings a wealth of knowledge to every internal audit engagement. We are wellversed in UAE’s regulatory environment, ensuring your audit is comprehensive and accurate.",
    },
    {
      title: "Customized Approach",
      detail:
        "We understand that no two companies are the same. Our internal audit services are specifically designed to meet your needs and objectives, giving you a personalized roadmap for development.",
    },
    {
      title: "Transparent and Collaborative",
      detail:
        "We keep lines of communication open and collaborate closely with your team throughout the audit process to create a seamless and open process.",
    },
    {
      title: "Continuous Improvement",
      detail:
        "We see the internal auditing process as a chance to advance. Our suggestions are intended to promote development and long-term success.",
    },
    {
      title: "Confidentiality",
      detail:
        "We handle sensitive information about your business with the highest sensitivity and take steps to protect your data during the audit process.",
    },
  ];
  return (
    <div className="p-10">
      <div className="grid-layout lg:grid-cols-2 h-[500px]">
        <Box className="bg-white p-12">
          <Typography variant="h5" className="text-center">
            Internal Audit
          </Typography>
          <Typography variant="body1">
            At Worthprime, we are aware that a company’s internal procedures lay
            the groundwork f or its success. Our specialized internal audit
            services are created to give you a thorough and insightful study of
            the procedures, internal controls, and general effectiveness of your
            business. As a dependable financial partner, we make every effort to
            make sure that your compan y’s activities are not only legal but
            also streamlined for utmost efficiency.
          </Typography>
        </Box>
      </div>
      <Typography variant="h5" className="!font-bold">
        Internal Auditing Services Offered:
      </Typography>
      <List>
        {serviceList.map((data) => (
          <div key={data.title} className="lg:pl-[50px]">
            <Divider textAlign="left">
              <Typography variant="h6">{data.title}</Typography>
            </Divider>
            <ListItem className="mb-8">
              <Typography variant="body1">{data.detail}</Typography>
            </ListItem>
          </div>
        ))}
      </List>
      <Typography variant="h5" className="!font-bold">
        Why Choose Worthprime for Your Internal Audit Needs:
      </Typography>
      <List>
        {needList.map((data) => (
          <div key={data.title} className="lg:pl-[50px]">
            <Divider textAlign="left">
              <Typography variant="h6">{data.title}</Typography>
            </Divider>
            <ListItem className="mb-8">
              <Typography variant="body1">{data.detail}</Typography>
            </ListItem>
          </div>
        ))}
      </List>
      <Typography variant="body1">
        When you work with Worthprime Bookkeeping LLC for your internal audit
        requirements, you can expect a collaboration built on trust, knowledge,
        and dedication to the success of your company. To find out more about
        how our Internal Audit services may help your company expand and be
        optimized in the UAE, Dubai, get in touch with us right away.
      </Typography>
    </div>
  );
}
