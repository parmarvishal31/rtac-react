import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Delta Membership",
    id: "tier-freelancer",
    href: "#",
    priceMonthly: "1 Year",
    description: "The essentials to provide your best work for clients.",
    features: [
      "1 year of membership",
      "Advertisment Banner",
      "10 Student Certificate",
      "1 Welcome Kit",
      "& Many More...",
    ],
    mostPopular: false,
  },
  {
    name: "Premium Membership",
    id: "tier-startup",
    href: "#",
    priceMonthly: "3 Year",
    description: "A plan that scales with your rapidly growing business.",
    features: [
      "3 year of membership",
      "Advertisment Banner",
      "10 + 2 Student Certificate",
      "1 Welcome Kit",
      "& Many More...",
    ],
    mostPopular: true,
  },
  {
    name: "Business Membership",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "14 Year",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "14 year of membership",
      "Advertisment Banner",
      "10 + 4 Student Certificate",
      "1 Welcome Kit",
      "& Many More...",
    ],
    mostPopular: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <div className="bg-white ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                tierIdx === 0 ? "lg:rounded-r-none" : "",
                tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10"
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? "text-indigo-600" : "text-gray-900",
                      "text-lg font-semibold leading-8"
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                      Most popular
                    </p>
                  ) : null}
                </div>
                {/* <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p> */}
                <p className="mt-3 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.priceMonthly}
                  </span>
                  {/* <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span> */}
                </p>
                <ul
                  role="list"
                  className="mt-4 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                    : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                  "mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                Inquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
