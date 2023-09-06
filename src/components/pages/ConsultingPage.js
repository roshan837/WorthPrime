import { Box, Divider, List, ListItem, Typography } from "@mui/material";

export default function ConsultingPage() {
  const serviceList = [
    {
      title: "Strategic Tax Planning",
      detail:
        "Our experienced tax advisers collaborate closely with you to create a thorough tax strategy suited to your company’s objectives. In order to find ways to reduce your business tax liabilities, we examine your financial status.",
    },
    {
      title: "TAX Compliance",
      detail:
        "It’s crucial to maintain corporate tax compliance. To assist you avoid fines and other legal entanglements, our advisers make sure that your tax returns are submitted on time, accurately, and in compliance with all applicable regulations.",
    },
    {
      title: "Deduction maximization",
      detail:
        "We find tax breaks, incentives, and exemptions that your company can use to lower its tax liability and free up additional funds for expansion and innovation.",
    },
    {
      title: "TAX Audits & Appeals",
      detail:
        "Our professionals offer crucial support and representation in the event of a tax audit or dispute. We guide you through the procedure, making sure that your rights are upheld and that your interests are represented.",
    },
    {
      title: "Support on an Ongoing Basis",
      detail:
        "We are dedicated to your success year- round. We offer continuing assistance, responding to your tax-related inquiries and keeping you updated on any alterations to tax laws.",
    },
  ];

  const needList = [
    {
      title: "Expertise",
      detail:
        "Our dedicated tax consultants possess a deep understanding of UAE’s corporate tax landscape. We stay updated on the latest regulations to provide you with accurate and reliable advice.",
    },
    {
      title: "Tailored Solutions",
      detail:
        "Your business is unique, and so are its tax needs. Our corporate tax consulting services are customized to address your specific industry, business size, and objectives.",
    },
    {
      title: "Cost Efficiency",
      detail:
        "Through strategic tax planning and optimization, we help you manage your tax liabilities effectively, freeing up resources that can be reinvested in your business.",
    },
    {
      title: "Risk Mitigation",
      detail:
        "Our consultants help you navigate potential tax risks, ensuring that your business operates within the bounds of the law and minimizes exposure to financial and legal complications.",
    },
    {
      title: "Collaborative Approach",
      detail:
        "We believe in collaboration and open communication. Our consultants work closely with you to understand your business and provide solutions that align with your vision.",
    },
  ];
  return (
    <div className="p-10">
      <div className="grid-layout lg:grid-cols-2 h-[500px]">
        <Box className="bg-white p-12">
          <Typography variant="h5" className="text-center">
            Corporate TAX
          </Typography>
          <Typography variant="body1">
            At WorthPrime, we are aware that handling corporate taxes may be a
            challenging and important part of running your company. Our
            specialized Corporate Tax Consulting services are made to give you
            professional advice and tactical solutions, ensuring that your
            company stays in compliance with the UAE’s tax regulations while
            maximizing your tax situation for the greatest possible financial
            gain.
          </Typography>
        </Box>
      </div>
      <Typography variant="h5" className="!font-bold">
        Our Corporate Tax Consulting Services:
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
        Why Choose WorthPrime for Your Corporate Tax Needs:
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
        Elevate Your Business’s Financial Health with Worth prime’s Corporate
        Tax Consulting. Partner with us to navigate the complexities of
        corporate taxation, maximize deductions, and strategically plan your tax
        obligations. Contact us today to learn more about how our Corporate Tax
        Consulting services can contribute to the success of your business in
        UAE, Dubai.
      </Typography>
    </div>
  );
}
