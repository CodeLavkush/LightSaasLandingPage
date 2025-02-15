'use client'
import CheckIcon from "@/assets/check.svg"
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    id: 1,
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    id: 2,
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    id: 3,
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-desc mt-5">Free forever. Upgrade for unlimited tasks, better security, and exclusive features.</p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features, id }) => (
            <div key={id} className={twMerge("card", inverse === true && "border-black bg-black text-white")}>
              <div key={"1"} className="flex justify-between">
                <h3 key={"2"} className={twMerge("text-lg font-bold text-black/50", inverse === true && "text-white/60")}>{title}</h3>
                {popular === true && (
                  <div key={"3"} className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <motion.span key={"4"} className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDf,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium" animate={{
                      backgroundPositionX: "100%",
                    }} transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'linear',
                      repeatType: 'loop',
                    }}>Popular</motion.span>
                  </div>
                )}
              </div>
              <div key={"5"} className="flex items-baseline gap-1 mt-[30px]">
                <span key={"6"} className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
                <span key={"7"} className="tracking-tight font-bold text-black/50">/month</span>
              </div>
              <button key={"8"} className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && "bg-white text-black")}>{buttonText}</button>
              <ul key={"12"} className="flex flex-col gap-5 mt-8">
                {features.map((feature) => (
                  <li key={"9"} className="text-sm flex items-center gap-4">
                    <CheckIcon key={"10"} className="h-6 w-6" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
