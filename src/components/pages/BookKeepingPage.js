import { Box, Divider, List, ListItem, Typography } from "@mui/material";

export default function Bookkeeping() {
  const serviceList = [
    {
      title: "Meticulous Record-Keeping",
      detail:
        "Every spending, revenue, and payment is correctly recorded by our skilled bookkeepers as they diligently record your financial activities. This level of specificity gives your financial management a strong foundation.",
    },
    {
      title: "Financial Clarity",
      detail:
        "With the help of our thorough bookkeeping services, you’ll be able to see your company’s financial situation clearly and succinctly. This gives you the ability to monitor the progress of your company, spot patterns, and make future plans.",
    },
    {
      title: "Expense Tracking",
      detail:
        "We keep a watchful eye on your expenses, categorizing and organizing them for easy reference. This makes it possible for you to spot potential areas for cost-cutting strategies",
    },
    {
      title: "Operational Insights",
      detail:
        "In addition to figures, we give you useful operational insights that help promote productivity and expansion. Our audit reports include doable suggestions for improving your company’s operational procedures.",
    },
    {
      title: "Invoicing and Receivables",
      detail:
        "Our bookkeeping experts handle invoicing and receivables, ensuring that you receive timely payments and maintain positive cash flow.",
    },
    {
      title: "Effective Tax",
      detail:
        "Preparation requires accurate financial records. Our bookkeeping services ensure that you have all the necessary documentation organized, which simplifies and speeds up the tax filing process.",
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
      title: "Time Savings",
      detail:
        "By outsourcing your bookkeeping to Worthprime, you save up time that can be used for strategic planning and your company’s essential operations.",
    },
    {
      title: "Data Security",
      detail:
        "We prioritize the security of your financial data. Our advanced security measures ensure that your sensitive information is kept safe and confidential.",
    },
    {
      title: "Professional Support",
      detail:
        "With Worthprime as your bookkeeping partner, you have access to professional support and guidance whenever you need it. We’re here to answer your questions and provide valuable insights.",
    },
  ];
  return (
    <div className="p-10">
      <div className="grid-layout lg:grid-cols-2 h-[500px]">
        <Box className="bg-white p-12">
          <Typography variant="h5" className="text-center">
            Book Keeping
          </Typography>
          <Typography variant="body1">
            At Worthprime, we are aware of the critical part precise and
            thorough audits plays in guaranteeing your company’s financial
            stability and transparency. Our first-rate Audit services are
            expertly designed to give you a thorough insight of your financial
            environment, enabling you to take well-informed decisions and propel
            your company forward.
          </Typography>
        </Box>
      </div>
      <Typography variant="h5" className="!font-bold">
        Our Bookkeeping Services:
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
        Experience the Benefits of Professional Bookkeeping with Worthprime
        Bookkeeping LLC. Let us handle the intricacies of your financial
        records, allowing you to focus on what you do best – growing your
        business. Contact us today to learn more about how our Bookkeeping
        services can contribute to the success of your business in UAE, Dubai.
      </Typography>
    </div>
  );
}
