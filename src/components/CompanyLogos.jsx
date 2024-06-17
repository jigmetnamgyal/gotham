import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline text-center text-n-1/50">
        We want to help create beautiful solana with
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <a target="_blank" href="https://therealworld.net/" className="flex items-center justify-center flex-1 h-[8.5rem]" key={index}>
          <li
            key={index}
          >
            <img src={logo} width={80} height={28} alt={logo} />
          </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
