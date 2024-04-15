
import React from "react";

interface ArchitectureDiagramProps {
  tierData: {
    tier1_availability_zone: string;
    tier1_service_name: string;
    tier1_icon_url: string;
    tier2_availability_zone: string;
    tier2_service_name: string;
    tier2_icon_url: string;
    tier3_availability_zone: string;
    tier3_service_name: string;
    tier3_icon_url: string;
  };
}

const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ tierData }) => {
  return (
    <div className="architecture-diagram">
      <div className="tier-box">
        <h3>1st Tier Architecture</h3>
        <div className="box">
          <div className="border">
            <div className="availability-zone-box">
              <p>Availability Zone: {tierData.tier1_availability_zone}</p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="border">
            <div className="service-name-box">
              <p>Service Name: {tierData.tier1_service_name}</p>
            </div>
            <div className="icon-box">
              <img src={tierData.tier1_icon_url} alt="Tier 1 Icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="tier-box">
        <h3>2nd Tier Architecture</h3>
        <div className="box">
          <div className="border">
            <div className="availability-zone-box">
              <p>Availability Zone: {tierData.tier2_availability_zone}</p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="border">
            <div className="service-name-box">
              <p>Service Name: {tierData.tier2_service_name}</p>
            </div>
            <div className="icon-box">
              <img src={tierData.tier2_icon_url} alt="Tier 2 Icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="tier-box">
        <h3>3rd Tier Architecture</h3>
        <div className="box">
          <div className="border">
            <div className="availability-zone-box">
              <p>Availability Zone: {tierData.tier3_availability_zone}</p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="border">
            <div className="service-name-box">
              <p>Service Name: {tierData.tier3_service_name}</p>
            </div>
            <div className="icon-box">
              <img src={tierData.tier3_icon_url} alt="Tier 3 Icon" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .architecture-diagram {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
        }
        .tier-box {
          text-align: center;
        }
        .box {
          border-radius: 5px;
          padding: 10px;
          margin-top: 30px; /* Adjust the space between boxes */
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .border {
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
        }
        .availability-zone-box,
        .service-name-box,
        .icon-box {
          margin-bottom: 10px;
        }
        img {
          width: 50px;
          height: 50px;
        }
      `}</style>
    </div>
  );
};

export default ArchitectureDiagram;

