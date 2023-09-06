import { Box, Divider, List, ListItem, Typography } from "@mui/material";

export default function VatConsultingPage() {
  const serviceList = [
    {
      title: "Expert Advice",
      detail:
        "Our knowledgeable VAT consultants can give you precise advice on how VAT affects your company’s operations because they are familiar with the UAE’s VAT laws.",
    },
    {
      title: "Compliance Assurance",
      detail:
        "By assuring correct calculations, on-time filings, and appropriate record-keeping, we help you comprehend and comply with your VAT requirements. This protects your company from any fines and legal problem.",
    },
    {
      title: "VAT Planning",
      detail:
        "With the help of our strategic VAT planning services, you can reduce your VAT burden and increase your available deductions. We collaborate closely with you to create a proactive VAT plan that supports your company’s objectives.",
    },
    {
      title: "Transaction Analysis",
      detail:
        "To establish the VAT implications of your company transactions, we evaluate them. This helps you make decisions that will improve you.",
    },
    {
      title: "Assistance for Audits",
      detail:
        "In the event of a VAT audit, our specialists stand by your side, offering the required paperwork and knowledge to get through the audit process without incident.",
    },
  ];

  const needList = [
    {
      title: "Knowledge",
      detail:
        "Our VAT advisors are very knowledgeable about UAE VAT rules and procedures. You can count on us to give you reliable advice that is current.",
    },
    {
      title: "Customized Solutions",
      detail:
        "We understand that every business is different. Our VAT consulting services are tailored to your particular sector, size of organization, and needs.",
    },
    {
      title: "Reduce Complexity",
      detail:
        "Although we have simplified VAT requirements for you, they can be complicated. Our consultants simplify complex ideas into straightforward language so you may make educated judgments.",
    },
    {
      title: "Risk Mitigation",
      detail:
        "By partnering with Worthprime for VAT consulting, you mitigate the risks associated with non-compliance and potential financial penalties.",
    },
    {
      title: "Client-Centric Approach",
      detail:
        "We prioritize your success. Our VAT consulting services are designed to empower your business to thrive in the VAT landscape.",
    },
  ];
  return (
    <div className="p-10">
      <div className="grid-layout lg:grid-cols-2 h-[500px]">
        <Box className="bg-white p-12">
          <Typography variant="h5" className="text-center">
            VAT Consulting
          </Typography>
          <Typography variant="body1">
            For businesses, navigating the complex Value Added Tax (VAT)
            landscape may be a difficult and intimidating undertaking. At
            Worthprime, we provide thorough VAT Consulting services that are
            specifically designed to give you professional help, ensuring that
            your company stays compliant and optimized in the always shifting
            VAT market.
          </Typography>
        </Box>
      </div>
      <Typography variant="h5" className="!font-bold">
        Our VAT Consulting Services.
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
        Why Choose Worthprime for Your VAT Consulting Needs:
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
        Elevate Your Business with Expert VAT Consulting from Worthprime
        Bookkeeping LLC. Let us guide you through the complexities of VAT,
        ensuring that your business remains compliant and positioned for growth.
        Contact us today to learn more about how our VAT Consulting services can
        contribute to the success of your business in UAE, Dubai.
      </Typography>
    </div>
  );
}
