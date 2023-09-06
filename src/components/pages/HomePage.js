import React from "react";
import SliderView from "../SliderView";
import ServiceCard from "../ServiceCard";
import img1 from "assets/img-1.jpg";
import img2 from "assets/img-2.jpg";
import img3 from "assets/img-3.jpg";
import {
  audit,
  book,
  tax,
  finance_1,
  finance_2,
  coleman,
  ravi,
  mendez,
} from "assets/images";
import { Box, Typography } from "@mui/material";
function HomePage() {
  const images = [
    {
      label: [
        "“It’s been easier growing our company with an accounting system",
        "that is so easy and scalable without worrying about anything.",
        "Credit goes to Aviaan Accounting.”",
      ],
      imgPath: img1,
    },
    {
      label: [
        "“I strongly recommend Worthprime Accounting",
        "for VAT and Bookkeeping services.”",
      ],
      imgPath: img2,
    },
    {
      label: [
        "“WorthPrime Accounting helped us",
        "organize the whole business",
        "beyond just bookkeeping and auditing.”",
      ],
      imgPath: img3,
    },
  ];

  const services = [
    {
      img: audit,
      title: "Audit",
      detail:
        "We help you in achieving compliance with various laws and regulations by reviewing the accuracy of financial statement and records.",
      link: "/audit",
    },
    {
      img: book,
      title: "Book Keeping",
      detail:
        "We help you establish and maintain accurate financial accounts, overall financial processes and management through our exceptional bookkeeping services in UAE.",
      link: "/book-keeping",
    },
    {
      img: book,
      title: "VAT Consulting",
      detail:
        "We ensure that your books of accounts and records are as per relevant VAT laws and advise you regarding optimizing your VAT position. We give you a practical approach about VAT obligations.",
      link: "/vat-consulting",
    },
    {
      img: book,
      title: "Internal Audit",
      detail:
        "We help you evaluate your internal controls, including corporate governance and accounting processes with a view to add value and improve organization’s operations.",
      link: "/internal-audit",
    },
    {
      img: tax,
      title: "Tax Agent",
      detail:
        "We help you navigate the complex world of taxes. We assist you with your tax obligations and represent you before tax authority in any tax-related matters.",
      link: "/tax",
    },
    {
      img: tax,
      title: "Corporate Tax",
      detail:
        "We act as your mentor and advice you on the corporate tax matters to ensure absolute compliance with the new regulations. We help simplify the processes, rules, and requirements for implementing corporate tax in UAE.",
      link: "/corporate-tax",
    },
  ];

  const whyWorthPrime = [
    {
      title: "Statutory Audit Companies in Dubai",
      detail:
        "The statutory audit report helps to increase the trustworthiness and credibility of the organization or firm.",
    },
    {
      title: "Client assessment by audit firms in Dubai",
      detail:
        "Being proactive before conducting any type of commerce for potential customers",
    },
    {
      title: "Business restructuring",
      detail:
        "Your business can face difficulties in times of uncertainty. We help you make suitable changes to restore your financial integrity and success.",
    },
    {
      title: "Prepare for your future",
      detail:
        "We are reliable financial advisors working for your success. We help you make the right financial decisions that work in your interest.",
    },
    {
      title: "Financial security and peace of mind",
      detail:
        "We cover a wide range of business functions and situations, providing robust financial advice and support to help you make proper business decisions.",
    },
    {
      title: "Top-tier financial support for you",
      detail:
        "As a leading financial advisory firm, we understand the financial challenges and problems you face. We help you navigate your complex situations and overcome them smoothly with minimal disruption to your company.",
    },
  ];

  const Testimonials = [
    {
      img: coleman,
      title: "Jessie Coleman",
      subTitle: "OUR ASSOCIATE",
      detail:
        "Their strategic advice for my business proved a savior for me. I am incredibly grateful for their reliable partnership and guidance.",
    },
    {
      img: mendez,
      title: "Charlie Mendez",
      subTitle: "ASSISTANT MANAGER",
      detail:
        "These guys are absolutely excellent in their work! I highly recommend for them for financial advisory!",
    },
    {
      img: ravi,
      title: "Parker Ravi",
      subTitle: "OUR MANAGER",
      detail:
        "I must say they have great insight and financial sense, which helped me take my business out of the monetary crisis.",
    },
  ];
  return (
    <>
      <SliderView images={images} className="h-full w-full" />
      <Box className="p-10">
        <Typography variant="h4" className="text-center p-4">
          Our Services
        </Typography>
        <div className="grid-layout md:grid-cols-2 lg:grid-cols-3 mb-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <div className="grid-layout md:grid-cols-2 mb-8">
          <div className="text-center">
            <Typography variant="h4" className="pb-6">
              Achieve your financial goals
            </Typography>
            <Typography variant="body1">
              The top internal and external auditing company in Dubai is
              Worthprime. By identifying the problematic areas, bolstering the
              corporate governance system, and increasing productivity, Dubai
              auditors contribute significantly to the value added to the
              company’s continuous operations.
            </Typography>
          </div>
          <div className="relative pl-[100px]">
            <img
              src={finance_1}
              alt="finance_1"
              className="w-full rounded-t-full"
            />
            <img
              src={finance_2}
              alt="finance_2"
              className="absolute bottom-0 left-0 w-[30%] rounded-t-full"
            />
          </div>
        </div>
        <div className="grid-layout">
          <Typography variant="h4" className="text-center">
            Why WorthPrime
          </Typography>
          <Typography variant="body2" className="text-center md:w-[50%]">
            In order to comply with legal requirements and compliances, both
            small and large commercial organizations in Dubai, UAE, require the
            assistance of external audit services. Services provided by auditing
            companies in Dubai, United Arab Emirates, are crucial in determining
            the company’s financial worth and position. An audit offers a fair
            and objective assessment of a company’s financial standing.
          </Typography>
          <div className="grid-layout md:grid-cols-2 lg:grid-cols-3 mb-8">
            {whyWorthPrime.map((card) => (
              <ServiceCard key={card.title} service={card} />
            ))}
          </div>
          <Typography variant="h4" className="text-center">
            Testimonials
          </Typography>
          <div className="grid-layout md:grid-cols-2 lg:grid-cols-3 mb-8">
            {Testimonials.map((card) => (
              <ServiceCard key={card.title} service={card} />
            ))}
          </div>
        </div>
      </Box>
    </>
  );
}

export default HomePage;
