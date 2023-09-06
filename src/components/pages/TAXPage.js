import { Box, Divider, List, ListItem, Typography } from "@mui/material";

export default function TaxPage() {
  const serviceList = [
    {
      title: "Expert Tax Advice",
      detail:
        "Our knowledgeable tax agents are familiar with UAE tax legislation and procedures. To assist you confidently manage the complex tax landscape, we provide trustworthy and current advice.",
    },
    {
      title: "TAX Filings",
      detail:
        "We take care of every facet of tax filing, making sure that your tax returns are correct, filed on time, and adhere to all legal requirements. By removing the administrative burden, you can concentrate on expanding your firm.",
    },
    {
      title: "Strategic Tax Planning",
      detail:
        "Our tax advisors collaborate closely with you to create a strategic tax strategy that supports your company’s objectives. We look for deduction, exemption, and incentive alternatives that can lower your tax obligations.",
    },
    {
      title: "Representation",
      detail:
        "In case of tax audits or disputes, our tax agents provide representation and support, ensuring that your interests are protected and your rights are upheld throughout the process.",
    },
    {
      title: "Compliance Assurance",
      detail:
        "With WorthPrime as your tax agent partner, you can rest assured that your business operations remain compliant with all relevant tax regulations, avoiding penalties and legal complications.",
    },
  ];

  const needList = [
    {
      title: "Expertise",
      detail:
        "Our skilled tax agents possess a deep understanding of UAE’s tax environment. We stay current with the latest regulations to provide you with accurate and reliable guidance.",
    },
    {
      title: "Personalized Solutions",
      detail:
        "We recognize that every business is unique. Our tax agent services are tailored to address your specific industry, business size, and tax requirements.",
    },
    {
      title: "Peace of Mind",
      detail:
        "With WorthPrime as your tax agent, you gain peace of mind knowing that your tax matters are in capable hands. We handle the intricacies of tax compliance so you can focus on driving your business forward.",
    },
    {
      title: "Cost Efficiency",
      detail:
        "Our strategic tax planning and optimization techniques help you manage your tax liabilities effectively, maximizing savings and resources.",
    },
  ];
  return (
    <div className="p-10">
      <div className="grid-layout lg:grid-cols-2 h-[500px]">
        <Box className="bg-white p-12">
          <Typography variant="h5" className="text-center">
            TAX Agent
          </Typography>
          <Typography variant="body1">
            WorthPrime is aware of how important tax compliance is to the
            success of your company. Our committed Tax Agent services are
            created to give you knowledgeable direction, rigorous attention to
            detail, and thorough support, guaranteeing that your company stays
            compliant with the UAE’s tax laws while maximizing your financial
            situation.
          </Typography>
        </Box>
      </div>
      <Typography variant="h5" className="!font-bold">
        Our Tax Agent Services:
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
        Collaboration is important to us, as is open communication. Our tax
        advisors work directly with you to comprehend your company and offer
        solutions that help you achieve your growth goals.
      </Typography>
      <Typography variant="body1">
        Benefit Your Company with Tax Agent Services from WorthPrime. Benefit
        from our experienced tax specialists’ devoted help, effective tax
        planning, and accurate tax compliance. To find out more about how our
        Tax Agent services can help your company succeed financially in the UAE,
        Dubai, get in touch with us right away.
      </Typography>
    </div>
  );
}
